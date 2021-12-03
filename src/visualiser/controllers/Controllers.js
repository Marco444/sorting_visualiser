import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import {FormControl, FormControlLabel, Radio, RadioGroup, Stack} from "@mui/material";
import React, {Component} from "react";

const STACK_WIDTH = 300;


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
                            fontWeight: 'bold'
                        }}>
                        <FormControlLabel value="insertionSort" control={<Radio/>} label="Insertion Sort"/>
                        <FormControlLabel value="mergeSort" control={<Radio/>}
                                          onChange={this.props.bubbleSortButtonClicked} label="Bubble Sort"/>
                        <FormControlLabel value="quickSort" control={<Radio/>} label="Quick Sort"/>
                    </RadioGroup>
                </FormControl>
            </Stack>
        );
    }
}
