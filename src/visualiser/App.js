
import {Stack, Typography} from "@mui/material";
import {Component} from "react";

import {Controllers} from "./controllers/Controllers"
import SortingVisualiser from "./viewer/Canvas";

import getRadixSortAnimations from "./model/animations/algorithms/radixSort";
import getQuickSortAnimations from "./model/animations/algorithms/quickSort";
import getMergeSortAnimations from "./model/animations/algorithms/mergeSort"
import getBubbleSortAnimations from "./model/animations/algorithms/bubbleSort";
import getShuffleAnimations from "./model/animations/shuffleAnimation";

import {newShuffledArray} from "./model/utils"
import {InformationBox} from "./controllers/InformationBox";

// Change this value for the number of bars (value) in the array.
const DEFAULT_NUMBER_OF_ARRAY_BARS = 10;
const DEFAULT_ANIMATION_SPEED = 500;
const DEFAULT_LENGTH_BARS = 1000;
const SHUFFLE_ANIMATION_SPEED = 4;
const DEFAULT_BARS_HEIGHT = 10;

const MAX_SLIDER_BARS = 100;


const SLIDER_MAX = 500;

export default class App extends Component {
    constructor(props) {
        super(props);
        this.currentSortingAlgorithm = () => this.applyAnimationsByClassName(getBubbleSortAnimations, this.sortingAnimationSpeed)
        this.state = {array: [], isBusy: false, stopAnimation: false, selected: "none"};
        this.sortingAnimationSpeed = DEFAULT_ANIMATION_SPEED
        this.canvasWidth = this.props.width / 1.1
        this.canvasHeight = this.props.height / 1.1
        this.barsLength = this.canvasWidth * 0.8
        this.barsNumber = DEFAULT_NUMBER_OF_ARRAY_BARS
        this.barsHeight =  DEFAULT_BARS_HEIGHT
        this.stopAnimation = false
        this.isBusy = false
    }

    componentDidMount() {
        this.setState(() => ({array: newShuffledArray(this.barsNumber, 0, this.barsLength)}));
    }

    //Controllers Handlers
    sortButtonClicked() {
        setTimeout( () => {
            this.setState(() => ({isBusy: true}))
            this.currentSortingAlgorithm();
        }, 100)
    }

    shuffleButtonClicked() {
        //Puede ser qu me haga el setState despues y no justo cuando yo quiero, tengo que delayer esto aca abajo
       setTimeout( () => {
            this.setState(() => ({array: newShuffledArray(this.barsNumber, 0, this.barsLength), isBusy: true}));
            this.applyAnimationsByClassName(getShuffleAnimations, SHUFFLE_ANIMATION_SPEED)
        }, 100);
    }

    handleStopAnimation() {
       window.location.reload();
    }

    handleSpeedSlider(event, value) {
        this.sortingAnimationSpeed = SLIDER_MAX - value + 3
    }

    handleBarsNumberSlider(event, value) {
        this.barsNumber = value
        this.shuffleButtonClicked()
    }


    //Animations
    bubbleSortSelected() {
        this.setState(() => ({selected: "bubbleSort"}))
        this.currentSortingAlgorithm = () => this.applyAnimationsByClassName(getBubbleSortAnimations, this.sortingAnimationSpeed);
    }

    mergeSortSelected() {
        this.setState(() => ({selected: "mergeSort"}))
        this.currentSortingAlgorithm = () => this.applyAnimationsByClassName(getMergeSortAnimations, this.sortingAnimationSpeed);
    }

    quickSortSelected() {
        this.setState(() => ({selected: "quickSort"}))
        this.currentSortingAlgorithm = () => this.applyAnimationsByClassName(getQuickSortAnimations, this.sortingAnimationSpeed)
    }

    radixSortSelected() {
        this.setState(() => ({selected: "radixSort"}))
        this.currentSortingAlgorithm = () => this.applyAnimationsByClassName(getRadixSortAnimations, this.sortingAnimationSpeed)
    }


    applyAnimationsByClassName(getAnimations, speed) {
        const animations = getAnimations(this.state.array);

        for (let index = 0; index < animations.length; index++) {
            let currentBars = document.getElementsByClassName('arrayBar');
            setTimeout(() => {
                        animations[index].applyTo(currentBars)
                        if (index === animations.length - 1) this.setState(() => ({isBusy: false}))
                }, index * speed);
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
                <Controllers sliderSpeedValue={SLIDER_MAX}
                             maxNumberBars={this.canvasHeight / (this.barsHeight + 0.5)}

                             sortButtonClicked={this.sortButtonClicked.bind(this)}
                             shuffleButtonClicked={this.shuffleButtonClicked.bind(this)}
                             bubbleSortButtonClicked={this.bubbleSortSelected.bind(this)}
                             mergeSortButtonClicked={this.mergeSortSelected.bind(this)}
                             quickSortButtonClicked={this.quickSortSelected.bind(this)}
                             radixSortButtonClicked={this.radixSortSelected.bind(this)}

                             handleSpeedSlider={this.handleSpeedSlider.bind(this)}
                             handlerBarsNumberSlider={this.handleBarsNumberSlider.bind(this)}

                             width={this.props.width} height={this.props.height}
                             isBusy={this.state.isBusy} stopAnimation={this.handleStopAnimation.bind(this)}

                             selected={this.state.selected}/>

                <SortingVisualiser barsHeight={this.barsHeight} array={this.state.array}
                            width={this.props.width} height={this.props.height} canvasWidth={this.canvasWidth}/>

            </Stack>

        );
    }
}

