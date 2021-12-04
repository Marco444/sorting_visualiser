import Controllers from "./visualiser/controllers/Controllers"
import SortingVisualiser from "./visualiser/viewer/Canvas";

import {Stack} from "@mui/material";
import {Component} from "react";
import getBubbleSortAnimations from "./visualiser/js/Algorithms"
import {newShuffledArray} from "./visualiser/js/utils"

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 10;
const ANIMATION_SPEED = 500;
const LENGTH_BARS = 1000;

const SELECTION_COLOR = '#a275ff';
const PRIMARY_COLOR = '#21e892';
const SHUFFLE_COLOR = '#ff8eb2';
const COMPARING_COLOR = 'rgba(83,126,255,0.98)';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.sortingAlgorithm = () => this.callBubbleSort()
        this.state = {array: []};
    }

    componentDidMount() {
        this.shuffle()
    }

    shuffle() {
        this.setState(() => ({
            array: newShuffledArray(NUMBER_OF_ARRAY_BARS, 0, LENGTH_BARS)
        }));
    }

    sortButtonClicked() {
        console.log('sort button pressed!');
        this.sortingAlgorithm();
    }

    shuffleButtonClicked() {
        console.log('shuffle button pressed!');
        this.shuffle()
        this.shuffleAnimation();
    }

    shuffleAnimation() {
        for (let i = 1; i <= NUMBER_OF_ARRAY_BARS; i++) {
            const bars = document.getElementsByClassName("arrayBar");
            setTimeout(() => {
                bars[i - 1].style.backgroundColor = PRIMARY_COLOR
                if(i === NUMBER_OF_ARRAY_BARS) return;
                bars[i].style.backgroundColor = SHUFFLE_COLOR
            }, i * 10);
        }

    }

    bubbleSortButtonClicked() {
        console.log('merge sort button pressed!')
        this.sortingAlgorithm = () => this.callBubbleSort();
    }


    callBubbleSort() {
        const animations = getBubbleSortAnimations(this.state.array);

        for (let index = 0; index < animations.length; index++) {
            const currentBars = document.getElementsByClassName("arrayBar");

            setTimeout( () => animations[index].applyTo(currentBars), index * ANIMATION_SPEED);

            /*if(animations[index].selected || animations[index].comparing) {
                const color = animations[index].comparing ? COMPARING_COLOR :
                              animations[index].selected ? SELECTION_COLOR : PRIMARY_COLOR

                setTimeout( ( ) => {
                    currentBars[animations[index].current].style.backgroundColor = color
                    currentBars[animations[index].next].style.backgroundColor = color
                }, index * ANIMATION_SPEED);

            } else {

                setTimeout( () => {
                   currentBars[animations[index].current].style.width = `${animations[index].width1}px`
                    currentBars[animations[index].next].style.width = `${animations[index].width2}px`

                    currentBars[animations[index].current].style.backgroundColor = PRIMARY_COLOR
                    currentBars[animations[index].next].style.backgroundColor = PRIMARY_COLOR
                }, index * ANIMATION_SPEED);
            }*/
        }
    }


    render() {
        return (
            <Stack direction="row"
                   sx={{
                       display: 'flex',
                       '& > *': {
                           m: 5,
                       }
                   }}>
                <Controllers sortButtonClicked={this.sortButtonClicked.bind(this)}
                             shuffleButtonClicked={this.shuffleButtonClicked.bind(this)}
                             bubbleSortButtonClicked={this.bubbleSortButtonClicked.bind(this)}/>

                <SortingVisualiser array={this.state.array}/>
            </Stack>
        );
    }
}

