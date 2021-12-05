import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import {FormControl, FormControlLabel, Radio, RadioGroup, Slider, Stack, Typography} from "@mui/material";
import React, {Component} from "react";

const STACK_WIDTH = 300;
const SLIDER_MAX = 198;

export default class Buttons extends Component {
    render() {
        return (
            <Stack width={STACK_WIDTH}>
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
                            paddingTop: 1,
                            fontWeight: 'bold',
                        }}>
                        <FormControlLabel value="insertionSort" control={<Radio/>} label="Merge Sort"
                                          onChange={this.props.mergeSortButtonClicked}/>
                        <FormControlLabel value="mergeSort" control={<Radio/>}
                                          onChange={this.props.bubbleSortButtonClicked} label="Bubble Sort"/>
                        <FormControlLabel value="quickSort" control={<Radio/>} label="Quick Sort"/>
                    </RadioGroup>
                    <Stack sx={{
                            backgroundColor: 'rgba(0,43,162,0.98)',
                            marginTop: 5,}}>
                    <Typography id="input-slider" sx={{
                        padding: 2,
                        fontWeight: 'bold',

                    }} gutterBottom> Animation Speed </Typography>
                    <Slider  max={SLIDER_MAX} sx={{
                        marginLeft: 2,
                        marginBottom: 2,
                        width: 265
                    }}  onChange={this.props.handleSpeedSlider} />
                    </Stack>
                </FormControl>
            </Stack>
        );
    }
}
