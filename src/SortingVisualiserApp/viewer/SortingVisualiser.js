import React, {Component} from "react";
import {Box, FormLabel} from "@mui/material";

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 1;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 30;

// This is the main color of the array bars.
const PRIMARY_COLOR = '#21e892';

const LENGTH_BARS = 100;

export default class SortingVisualizer extends Component {
    constructor(props) {
        super(props);
        this.state = {array: this.resetArray()};
    }

    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        const array = [];
        for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
            array.push(randomIntFromInterval(0, LENGTH_BARS));
        }
        return array;
    }


    render() {

        return (
            <Box sx={{
                position: 'relative',
                right: 10,
                width: 1000,
                height: 700,
                backgroundColor: 'wheat',
            }}>
                {this.state.array.map((value, idx) => (
                    <Box key={idx} sx={{
                        width: value,
                        position: 'relative',
                        height: 20,
                        backgroundColor: PRIMARY_COLOR
                    }}> </Box>
                ))}
            </Box>

        );
    }
}

function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}