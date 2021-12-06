import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import {FormControl, FormControlLabel, Radio, RadioGroup, Slider, Stack, Typography} from "@mui/material";
import React, {Component} from "react";
import {useMeasure} from "react-use";



export const Controllers = (props) => {
    const stackWidth = props.width / 8;
    const stackHeight = props.height;
    const sliderWidth = stackWidth - 30;

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
                <Button key="one"
                        sx={{
                            bgcolor: '#a275ff',
                            color: 'white',
                            fontWeight: 'bold',
                            paddingLeft: 2,
                            paddingTop: 1,
                        }} onClick={props.sortButtonClicked}> SORT </Button>
                <Button key="two"
                        sx={{
                            bgcolor: '#ff8eb2',
                            color: 'white',
                            fontWeight: 'bold',
                            paddingLeft: 2,
                            paddingTop: 1,
                        }} onClick={props.shuffleButtonClicked}> SHUFFLE </Button>
            </ButtonGroup>
            <FormControl sx={{
                marginTop: 5,
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
                        paddingTop: 3,
                        paddingBottom: 2,
                        fontWeight: 'bold',
                    }}>
                    <Typography id="animation-slider" sx={{
                        paddingLeft: 2,
                        fontWeight: 'bold',
                    }} gutterBottom> Algorithms </Typography>

                    <FormControlLabel value="insertionSort" control={<Radio/>} label="Merge Sort"
                                      onChange={props.mergeSortButtonClicked} defaultChecked={true}/>
                    <FormControlLabel value="mergeSort" control={<Radio/>}
                                      onChange={props.bubbleSortButtonClicked} label="Bubble Sort"/>
                    <FormControlLabel value="quickSort" control={<Radio/>} label="Quick Sort"/>
                </RadioGroup>
            </FormControl>
            <Stack sx={{
                backgroundColor: 'rgba(57,92,183,0.98)',
                marginTop: 5,
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
                }} onChange={props.handleSpeedSlider}/>
            </Stack>

            <Stack sx={{
                backgroundColor: 'rgba(57,92,183,0.98)',
                marginTop: 5,
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
                }} onChange={props.handlerBarsNumberSlider}/>
            </Stack>
        </Stack>
    );
}
