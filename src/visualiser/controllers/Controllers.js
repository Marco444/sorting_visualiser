import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import {Stack} from "@mui/material";
import React, {Component} from "react";
import {useMeasure} from "react-use";
import {InformationBox} from "./InformationBox";

import PlayCircleOutlineRoundedIcon from '@mui/icons-material/PlayCircleOutlineRounded';
import ShuffleOnRoundedIcon from '@mui/icons-material/ShuffleOnRounded';

import {SliderNumberBars} from "./sliders/SliderNumberBars";
import {SliderAnimationSpeed} from "./sliders/SliderAnimationSpeed";
import {AlgorithmSelector} from "./AlgorithmSelector";
import {ResetButton} from "./buttons/ResetButton";
import {ShuffleButton} from "./buttons/ShuffleButton";
import {SortButton} from "./buttons/SortButton";

export const Controllers = (props) => {
    const stackWidth = props.width / 8;
    const stackHeight = props.height;
    const sliderWidth = stackWidth - 30;
    let info;


    const iconSX = {paddingLeft: 1}


    return (

        <Stack  sx={{
            marginRight: 1,
            width: stackWidth,
            height: props.height / 1.1
        }}>
            <ButtonGroup
                orientation="vertical"
                aria-label="vertical contained button group"
                variant="contained">
                <SortButton isBusy={props.isBusy} sortButtonClicked={props.sortButtonClicked} />
                <ShuffleButton isBusy={props.isBusy} shuffleButtonClicked={props.shuffleButtonClicked} />
                { props.isBusy && <ResetButton stopAnimation={props.stopAnimation} /> }
            </ButtonGroup>

            <AlgorithmSelector isBusy={props.isBusy} bubbleSortButtonClicked={props.bubbleSortButtonClicked}
                               radixSortButtonClicked={props.radixSortButtonClicked} mergeSortButtonClicked={props.mergeSortButtonClicked}
                               quickSortButtonClicked={props.quickSortButtonClicked} stackWidth={stackWidth} />

            <SliderAnimationSpeed isBusy={props.isBusy} sliderWidth={sliderWidth} sliderSpeedValue={props.sliderSpeedValue}
                                  handleSpeedSlider={props.handleSpeedSlider} />

            <SliderNumberBars isBusy={props.isBusy} sliderWidth={sliderWidth}
                              handlerBarsNumberSlider={props.handlerBarsNumberSlider} maxNumberBars={props.maxNumberBars} />

            <InformationBox selected={props.selected} width={sliderWidth} />
        </Stack>
    );
}
