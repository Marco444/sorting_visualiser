
import {Stack} from "@mui/material";
import {Component} from "react";

import Controllers from "./visualiser/controllers/Controllers"
import SortingVisualiser from "./visualiser/viewer/Canvas";

import getMergeSortAnimations from "./visualiser/model/animations/algorithms/mergeSort"
import getBubbleSortAnimations from "./visualiser/model/animations/algorithms/bubbleSort";
import getShuffleAnimations from "./visualiser/model/animations/shuffleAnimation";


import {newShuffledArray} from "./visualiser/model/utils"

// Change this value for the number of bars (value) in the array.
const DEFAULT_NUMBER_OF_ARRAY_BARS = 10;
const DEFAULT_ANIMATION_SPEED = 500;
const DEFAULT_LENGTH_BARS = 1000;
const SHUFFLE_ANIMATION_SPEED = 30;

const SLIDER_MAX = 198;

export default class App extends Component {
    constructor(props) {
        super(props);
        this.currentSortingAlgorithm =
            () => this.applyAnimationsByClassName(getBubbleSortAnimations, this.state.barsClassName, this.sortingAnimationSpeed)
        this.state = {array: [], barsClassName: 'arrayBar'};
        this.sortingAnimationSpeed = DEFAULT_ANIMATION_SPEED
        this.barsLength = DEFAULT_LENGTH_BARS
        this.barsNumber = DEFAULT_NUMBER_OF_ARRAY_BARS
    }

    componentDidMount() {
        this.shuffle()
    }

    shuffle() {
        this.setState(() => ({array: newShuffledArray(this.barsNumber, 0, this.barsLength)}));
    }

    //Controllers Handlers
    sortButtonClicked() {
        this.currentSortingAlgorithm();
    }

    shuffleButtonClicked() {
        this.shuffle();
        //Puede ser qu me haga el setState despues y no justo cuando yo quiero, tengo que delayer esto aca abajo
        setTimeout(() => this.applyAnimationsByClassName(
                        getShuffleAnimations, this.state.barsClassName, SHUFFLE_ANIMATION_SPEED), 100);
    }

    handleSpeedSlider(event, value) {
        console.log(value)
        this.sortingAnimationSpeed = SLIDER_MAX - value
    }

    handleBarsNumberSlider(event, value) {
        this.barsNumber = value
        this.shuffleButtonClicked()
    }

    //Animations
    bubbleSortSelected() {
        this.currentSortingAlgorithm =
            () => this.applyAnimationsByClassName(getBubbleSortAnimations, this.state.barsClassName,
                this.sortingAnimationSpeed);
    }

    mergeSortSelected() {
        this.currentSortingAlgorithm =
            () => this.applyAnimationsByClassName(getMergeSortAnimations, this.state.barsClassName,
                this.sortingAnimationSpeed);
    }


    applyAnimationsByClassName(getAnimations, className, speed) {
        const animations = getAnimations(this.state.array);

        for (let index = 0; index < animations.length; index++) {
            const currentBars = document.getElementsByClassName(className);
            setTimeout( () => animations[index].applyTo(currentBars), index * speed);
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
                             bubbleSortButtonClicked={this.bubbleSortSelected.bind(this)}
                             mergeSortButtonClicked={this.mergeSortSelected.bind(this)}
                             handleSpeedSlider={this.handleSpeedSlider.bind(this)}
                             handlerBarsNumberSlider={this.handleBarsNumberSlider.bind(this)}/>

                <SortingVisualiser array={this.state.array}/>
            </Stack>
        );
    }
}

