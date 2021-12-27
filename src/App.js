import {newShuffledArray} from "./visualiser/model/utils";
import {
    getAlgorithmSelectionAnimation,
    getSelectedAnimations,
    getShuffleAnimations
} from "./visualiser/model/animations/AnimationsEngine";

import React, {useEffect, useState} from "react";
import {Stack} from "@mui/material";
import SortingVisualiser from "./visualiser/components/Canvas";
import {FunctionsButtons} from "./visualiser/components/buttons/FunctionsButtons";
import {AlgorithmSelector} from "./visualiser/components/radioBox/AlgorithmSelector";
import {SliderAnimationSpeed} from "./visualiser/components/sliders/SliderAnimationSpeed";
import {InformationBox} from "./visualiser/components/InformationBox";
import {SortingAlgorithm} from "./visualiser/model/algorithms/SortingAlgorithm";
import {SliderNumberBars} from "./visualiser/components/sliders/SliderNumberBars";


export const App = ({canvasHeight, canvasWidth, stackWidth, stackHeight, width, height, stackLeftTopMargin,
                    functionButtonsHeight, algorithmBoxHeight, slidersHeight}) => {

    const ANIMATION_SPEED_SLIDER_MAX = 200;
    const animationSpeed = 1
    const barsHeight = animationSpeed * 2

    const [sortingAnimationSpeed, setSortingAnimationSpeed] = useState(ANIMATION_SPEED_SLIDER_MAX * 0.25)
    const [numberOfBars, setNumberOfBars] = useState(canvasHeight * 0.75 / barsHeight)
    const barsLength = canvasWidth * 0.75

    const [isBusy, setBusy] = useState(false)
    const [array, setArray] = useState(newShuffledArray(numberOfBars, 0, barsLength))
    const [sortingAlgorithm, setSortingAlgorithm] = useState(SortingAlgorithm.none)

    const defaultNumberOfBars = numberOfBars
    const defaultAnimationSpeed = sortingAnimationSpeed


    const sortButtonClicked = () => {
        setTimeout( () => {
            if(sortingAlgorithm !== SortingAlgorithm.none)
                setBusy(true)
            applyAnimations(sortingAlgorithm.getAnimations(array), sortingAnimationSpeed)
        }, 100)
    }

    const shuffleButtonClicked = () => {
        setArray(newShuffledArray(numberOfBars, 0, barsLength))
        setBusy(true)
    }

    const handleSpeedSlider = (event, value) => {
        setBusy(true)
        setSortingAnimationSpeed(() => ANIMATION_SPEED_SLIDER_MAX - value + 1)
    }

    const handleBarsNumberSlider = (event, value) => {
        setNumberOfBars(value)
        setBusy(true)
        setArray(newShuffledArray(value, 0, barsLength))
    }

    useEffect(() => applyAnimations(getSelectedAnimations(array), animationSpeed), [numberOfBars, sortingAnimationSpeed])
    useEffect(() => applyAnimations(getShuffleAnimations(array), animationSpeed), [array])
    useEffect(() => applyAnimations(getAlgorithmSelectionAnimation(array), animationSpeed), [sortingAlgorithm])

    const applyAnimations = (animations, speed) => {

        for (let index = 0; index < animations.length; index++) {
            setTimeout(() => {
                let currentBars = document.getElementsByClassName('arrayBar');
                animations[index].applyTo(currentBars)
                if (index === animations.length - 1) setBusy(false)
            }, index * speed);
        }
    }

    return (
        <Stack direction="row"
               sx={{
                   display: 'flex',
                   '& > *': {
                       m: 2,
                   }
               }}>

            <Stack sx={{
                marginRight: 1,
                width: stackWidth,
                height: stackHeight
            }}>

                <FunctionsButtons isBusy={isBusy} shuffleButtonClicked={shuffleButtonClicked.bind(this)}
                                  sortButtonClicked={sortButtonClicked.bind(this)} height={functionButtonsHeight}/>

                <AlgorithmSelector isBusy={isBusy} stackWidth={stackWidth} height={algorithmBoxHeight}
                                   bubbleSortButtonClicked={() => {setSortingAlgorithm(SortingAlgorithm.bubbleSort); setBusy(true)}}
                                   radixSortButtonClicked={() => {setSortingAlgorithm(SortingAlgorithm.radixSort); setBusy(true)}}
                                   mergeSortButtonClicked={() => {setSortingAlgorithm(SortingAlgorithm.mergeSort); setBusy(true)}}
                                   quickSortButtonClicked={() => {setSortingAlgorithm(SortingAlgorithm.quickSort); setBusy(true)}}/>

                <SliderAnimationSpeed isBusy={isBusy} sliderWidth={stackWidth}
                                      handleSpeedSlider={handleSpeedSlider.bind(this)}
                                      maxSliderSpeedValue={ANIMATION_SPEED_SLIDER_MAX}
                                      minSliderSpeedValue={ANIMATION_SPEED_SLIDER_MAX / 2}
                                      defaultSpeedValue={ANIMATION_SPEED_SLIDER_MAX - defaultAnimationSpeed}
                                      height={slidersHeight} marginTop={functionButtonsHeight + algorithmBoxHeight}/>

                <SliderNumberBars isBusy={isBusy} sliderWidth={stackWidth}
                                  handlerBarsNumberSlider={handleBarsNumberSlider.bind(this)}
                                  maxNumberBars={canvasHeight / barsHeight}
                                  minNumberBars={canvasHeight * 0.5 / barsHeight}
                                  defaultNumberBars={defaultNumberOfBars}/>


                <InformationBox algorithm={sortingAlgorithm} width={stackWidth}/>

            </Stack>

            <SortingVisualiser barsHeight={barsHeight} array={array}
                               width={width} height={height} canvasWidth={canvasWidth}/>
        </Stack>

    );
}