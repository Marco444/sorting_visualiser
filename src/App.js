import Controllers from "./visualiser/controllers/Controllers"
import SortingVisualiser from "./visualiser/viewer/Canvas";

import {Stack} from "@mui/material";
import {Component} from "react";


// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 30;
const ANIMATION_SPEED = 1000;
const LENGTH_BARS = 100;

export default class App extends Component{
    constructor(props) {
        super(props);
        this.sortingAlgorithm = () => this.callMergeSort()
        this.state = {
            array : newShuffledArray(),
        };
    }

    sortButtonClicked() {
        console.log('sort button pressed!');
        this.sortingAlgorithm();
    }

    shuffleButtonClicked() {
        console.log('shuffle button pressed!');
        this.setState(() => ({
            array : newShuffledArray()
        }));
    }

    mergeSortButtonClicked() {
        console.log('merge sort button pressed!')
        this.sortingAlgorithm = () => this.callMergeSort();
    }

    callMergeSort() {
        console.log('merge sort called!');
        const animations = getBubbleSortAnimations(this.state.array);

        for (let index = 0; index < animations.length; index++) {

            //We store the info of the two bars to change
            const [[i, iHeight], [j, jHeight]] = animations[index];

            //an auxiliary array to modify
            //const sortedArray = this.state.array
            const sortedArray = document.getElementsByName("arrayBar");

            setTimeout( () => {
                sortedArray[i].style.widht = `${iHeight}px`;
                sortedArray[j].style.width = `${jHeight}px`;
            }, i * ANIMATION_SPEED);

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
                             mergeSortButtonClicked={this.mergeSortButtonClicked.bind(this)}/>

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

function getBubbleSortAnimations(array) {
    const animations = []
    if(array.length === 0) return animations;
    for (let i = 0; i < array.length; i++) {
        for(let j = i; j < array.length; j++) {
            //animations.push([1, i, j]);         //we push the elements we are comparing

            if(array[j] > array[j + 1]) {       //we need to swap the elements in the array, and
                                                //push the animation
                //SWAP ELEMENTS
                const aux = array[j]
                array[j] = array[j + 1]
                array[j + 1] = aux

                animations.push([[j, array[j]], [j + 1, array[j + 1]]])
            }
        }
    }
    return  animations;
}
