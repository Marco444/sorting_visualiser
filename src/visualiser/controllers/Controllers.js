import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import {Box, FormControl, FormControlLabel, Radio, RadioGroup, Slider, Stack, Typography} from "@mui/material";
import React, {Component} from "react";
import {useMeasure} from "react-use";
import {InformationBox} from "./InformationBox";


export const Controllers = (props) => {
    const stackWidth = props.width / 8;
    const stackHeight = props.height;
    const sliderWidth = stackWidth - 30;
    let info;




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
                <Button key="one" disabled={props.isBusy}
                        sx={{
                            bgcolor: '#a275ff',
                            color: 'white',
                            fontWeight: 'bold',
                            paddingLeft: 2,
                            paddingTop: 1,
                        }} onClick={props.sortButtonClicked}> SORT </Button>
                <Button key="two" disabled={props.isBusy}
                        sx={{
                            bgcolor: '#ff8eb2',
                            color: 'white',
                            fontWeight: 'bold',
                            paddingLeft: 2,
                            paddingTop: 1,
                        }} onClick={props.shuffleButtonClicked}> SHUFFLE </Button>
                { props.isBusy && <Button key="two"
                        sx={{
                            bgcolor: '#ff8181',
                            color: 'white',
                            fontWeight: 'bold',
                            paddingLeft: 2,
                            paddingTop: 1,
                        }} onClick={props.stopAnimation}> RESET </Button> }
            </ButtonGroup>
            <FormControl sx={{
                marginTop: 1,
                fontWeight: 'bold',
                color: 'white',
                width: stackWidth,
            }} component="fieldset">

                <RadioGroup
                    aria-label="gender"
                    defaultValue="female"
                    name="radio-controllers-group"
                    sx={{
                        bgcolor: '#21e892',
                        color: 'white',
                        paddingLeft: 2,
                        paddingTop: 2,
                        paddingBottom: 2,
                        fontWeight: 'bold',
                    }}>
                    <Typography id="animation-slider" sx={{
                        fontWeight: 'bold',
                    }} gutterBottom> Algorithms </Typography>
                    <Stack sx={{fontWeight: 'bold'}}>
                    <FormControlLabel value="insertionSort" control={<Radio/>} label="Merge Sort"
                                      onChange={props.mergeSortButtonClicked} disabled={props.isBusy} sx={{fontWeight: 'bold'}}/>

                    <FormControlLabel value="mergeSort" control={<Radio/>}  label="Bubble Sort"
                                      onChange={props.bubbleSortButtonClicked} disabled={props.isBusy}/>

                    <FormControlLabel value="quickSort" control={<Radio/>} label="Quick Sort"
                                      onChange={props.quickSortButtonClicked} disabled={props.isBusy}/>

                    <FormControlLabel value="radixSort" control={<Radio/>} label="Radix Sort"
                                      onChange={props.radixSortButtonClicked} disabled={props.isBusy}/>
                    </Stack>
                </RadioGroup>
            </FormControl>
            <Stack sx={{
                backgroundColor: 'rgba(57,92,183,0.98)',
                marginTop: 1,
                color: "white"
            }}>
                <Typography id="animation-slider" sx={{
                    padding: 2,
                    fontWeight: 'bold',

                }} gutterBottom> Animation Speed </Typography>
                <Slider max={props.sliderSpeedValue} key={1} sx={{
                    marginLeft: 2,
                    marginBottom: 2,
                    width: sliderWidth
                }} onChange={props.handleSpeedSlider} disabled={props.isBusy}/>
            </Stack>

            <Stack sx={{
                backgroundColor: 'rgba(57,92,183,0.98)',
                marginTop: 1,
                color: "white"
            }}>
                <Typography id="bars-slider" sx={{
                    padding: 2,
                    fontWeight: 'bold',

                }} gutterBottom> Number bars </Typography>
                <Slider max={props.maxNumberBars} id="sliderBars" sx={{
                    marginLeft: 2,
                    marginBottom: 2,
                    width: sliderWidth
                }} onChange={props.handlerBarsNumberSlider} disabled={props.isBusy}/>
            </Stack>
            <InformationBox selected={props.selected} width={sliderWidth} />
        </Stack>
    );
}
