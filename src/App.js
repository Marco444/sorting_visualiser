import Controllers from "./visualiser/controllers/Controllers"
import SortingVisualiser from "./visualiser/viewer/Canvas";

import {Stack} from "@mui/material";
import {Component} from "react";


// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 30;
const ANIMATION_SPEED = 10;
const LENGTH_BARS = 1000;

const SHUFFLE_TIMEOUT = 300;

const SELECTION_COLOR = '#a275ff';
const PRIMARY_COLOR = '#21e892';
const SHUFFLE_COLOR ='#ff8eb2';

export default class App extends Component{
    constructor(props) {
        super(props);
        this.sortingAlgorithm = () => this.callBubbleSort()
        this.state = {
            array : newShuffledArray(),
        };
    }

    sortButtonClicked() {
        console.log('sort button pressed!');
        //this.sortingAlgorithm();
        this.moveTwoBars();
    }

    shuffleButtonClicked() {
        console.log('shuffle button pressed!');
        this.setState(() => ({
            array : newShuffledArray()
        }));

        this.paintAllBars();
    }

    paintAllBars() {
        const bars = document.getElementsByName("arrayBar");

        for (let i = 0; i < bars.length; i++)
            bars[i].style.backgroundColor = SHUFFLE_COLOR

        setTimeout( () => {
            for (let i = 0; i < bars.length; i++)
                bars[i].style.backgroundColor = PRIMARY_COLOR
        }, SHUFFLE_TIMEOUT);
    }

    bubbleSortButtonClicked() {
        console.log('merge sort button pressed!')
        this.sortingAlgorithm = () => this.callBubbleSort();
    }

    moveTwoBars() {
        const bars = document.getElementsByName("arrayBar")
        for(let i = 0; i < bars.length - 1; i++) {
            bars[i].style.width = bars[i + 1].style.width
            setTimeout(
                () => bars[i + 1].style.backgroundColor = i % 2 === 0 ? SELECTION_COLOR : PRIMARY_COLOR, 1000)
        }
    }

    callBubbleSort() {
        console.log('merge sort called!');
        const animations = getBubbleSortAnimations(this.state.array);
        const originalArr = this.state.array;

        for (let index = 0; index < animations.length; index++) {

            //We store the info of the current bars in the DOM
            const currentBars = document.getElementsByName("arrayBar");

            /*if(animations[index].comparing) {
                    currentBars[animations[index].current].style.backgroundColor = SELECTION_COLOR
                    currentBars[animations[index].next].style.backgroundColorColor = SELECTION_COLOR

            setTimeout( () => {
                currentBars[animations[index].current].style.backgroundColor = PRIMARY_COLOR
                currentBars[animations[index].next].style.backgroundColor = PRIMARY_COLOR
            }, index * ANIMATION_SPEED);*/
            //} else {
            /*
                setTimeout( () => {
                    currentBars[.style.width = `${iWidth}px`;
                    currentBars[i].style.background = 'red';
                    currentBars[j].style.width = `${jWidth}px`;
                    currentBars[j].style.background = `blue`;

                }, i * ANIMATION_SPEED);
            }

            /* Cute way, but setState doesn't work naively

            //an auxiliary array to modify
            const currentBars = this.state.array

            setTimeout( () => {
                currentBars[i] = iWidth
                currentBars[j] = jWidth
            }, i );

            this.setState( () => ({array: currentBars});

             */
        }
    }


    render(){
        return (
            <Stack direction="row"
                   sx={{
                       display: 'flex',
                       '& > *': {
                           m: 5,
                       }}}>
                <Controllers sortButtonClicked={this.sortButtonClicked.bind(this)}
                             shuffleButtonClicked={this.shuffleButtonClicked.bind(this)}
                             bubbleSortButtonClicked={this.bubbleSortButtonClicked.bind(this)}/>

                <SortingVisualiser array={this.state.array} />
            </Stack>
        );
    }
}



function newShuffledArray() {
    const array = [];
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
        array.push(randomIntFromInterval(0, LENGTH_BARS));
    }
    return array;
}

function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getBubbleSortAnimations(array2) {
    const animations = []
    const array = array2

    if(array.length === 0) return animations;

    for (let i = 0; i < array.length; i++) {
        for(let j = 0; j < array.length; j++) {
            animations.push({
                comparing: 1, //We are comparing if it's 1
                current: i,
                next: j
            });         //we push the elements we are comparing

            if(array[j] > array[j + 1]) {       //we need to swap the elements in the array, and
                                                //push the animation

                animations.push( {
                    comparing: 0, //We are swapping if it's 0
                    current: j,
                    next: j + 1
                });

                //SWAP ELEMENTS
                const aux = array[j];
                array[j] = array[j + 1];
                array[j + 1] = aux;
            }
        }
    }

    console.log( equalArrays(array, array2.sort((a, b) => a >b)) ? "Bubble sort worked" : "Bubble sort did not work")
    console.log(animations)
    return  animations;
}

//UTILITY METHODS

function equalArrays(array1, array2) {
    if(array1.length !== array2.length) return false;
    for(let i = 0; i < array1.length; i++)
        if(array1[i] !== array2[i])
            return false;
    return true;
}