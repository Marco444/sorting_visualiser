import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import {FormControl, FormControlLabel, Radio, RadioGroup, Slider, Stack, Typography} from "@mui/material";
import React, {Component} from "react";

const STACK_WIDTH = 300;

export default class Buttons extends Component {
    render() {
        return (
            <Stack width={STACK_WIDTH} >
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
                            }} onClick={this.props.sortButtonClicked}> SORT </Button>
                    <Button key="two"
                            sx={{
                                bgcolor: '#ff8eb2',
                                color: 'white',
                                fontWeight: 'bold',
                                paddingLeft: 2,
                                paddingTop: 1,
                            }} onClick={this.props.shuffleButtonClicked}> SHUFFLE </Button>
                </ButtonGroup>
                <FormControl sx={{
                    marginTop: 5,
                    fontWeight: 'bold',
                    color: 'white',
                }} component="fieldset">

                    <RadioGroup
                        aria-label="gender"
                        defaultValue="female"
                        name="radio-controllers-group"
                        sx={{
                            bgcolor: '#21e892',
                            color: 'white',
                            width: 275,
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
                                          onChange={this.props.mergeSortButtonClicked} defaultChecked={true}/>
                        <FormControlLabel value="mergeSort" control={<Radio/>}
                                          onChange={this.props.bubbleSortButtonClicked} label="Bubble Sort"/>
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
                    <Slider max={this.props.sliderSpeedValue} key={1} sx={{
                        marginLeft: 2,
                        marginBottom: 2,
                        width: 265
                    }} onChange={this.props.handleSpeedSlider}/>
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
                    <Slider max={this.props.maxNumberBars} id="sliderBars" sx={{
                        marginLeft: 2,
                        marginBottom: 2,
                        width: 265
                    }} onChange={this.props.handlerBarsNumberSlider}/>
                </Stack>
            </Stack>
        );
    }
}
