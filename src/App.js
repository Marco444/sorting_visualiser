
import {Stack} from "@mui/material";
import {Component} from "react";

import Controllers from "./visualiser/controllers/Controllers"
import SortingVisualiser from "./visualiser/viewer/Canvas";

import getMergeSortAnimations from "./visualiser/model/algorithms/mergeSort"
import getBubbleSortAnimations from "./visualiser/model/algorithms/bubbleSort";
import {newShuffledArray} from "./visualiser/model/utils"

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 10;
const ANIMATION_SPEED = 500;
const LENGTH_BARS = 1000;

const SELECTION_COLOR = '#a275ff';
const PRIMARY_COLOR = '#21e892';
const SHUFFLE_COLOR = '#ff8eb2';
const COMPARING_COLOR = 'rgba(123,152,248,0.98)';

const SLIDER_MAX = 198;

export default class App extends Component {
    constructor(props) {
        super(props);
        this.sortingAlgorithm = () => this.callSortingAlgorithm(getBubbleSortAnimations)
        this.state = {array: []};
        this.animateSort = true
        this.animationSpeed = ANIMATION_SPEED
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
        this.sortingAlgorithm = () => this.callSortingAlgorithm(getBubbleSortAnimations);
    }

    mergeSortButtonClicked() {
        this.sortingAlgorithm = () => this.callSortingAlgorithm(getMergeSortAnimations);
    }


    callSortingAlgorithm(getAnimations) {
        const animations = getAnimations(this.state.array);

        for (let index = 0; index < animations.length; index++) {
            const currentBars = document.getElementsByClassName("arrayBar");
            setTimeout( () => animations[index].applyTo(currentBars),
                index * this.animationSpeed);
        }
    }


    handleSpeedSlider(event, value) {
        console.log(value)
        this.animationSpeed = SLIDER_MAX - value
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
                             bubbleSortButtonClicked={this.bubbleSortButtonClicked.bind(this)}
                             mergeSortButtonClicked={this.mergeSortButtonClicked.bind(this)}
                             handleSpeedSlider={this.handleSpeedSlider.bind(this)}/>

                <SortingVisualiser array={this.state.array}/>
            </Stack>
        );
    }
}

