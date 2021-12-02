import React, {Component} from "react";
import Button from "@mui/material/Button";
import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from "@mui/material";

const styling = {
    bgcolor: '#21e892',
    color: 'white',
    width: 275,
    paddingLeft: 2,
    paddingTop: 1,
    fontWeight: 'bold'
}


export default class AlgorithmButtons extends Component {
    render() {
        return <FormControl sx={{
            marginTop: 5,
            fontWeight: 'bold',
            color: 'white',
        }} component="fieldset">

            <RadioGroup
                aria-label="gender"
                defaultValue="female"
                name="radio-controllers-group"
                sx={styling}>
                <FormControlLabel value="insertionSort" control={<Radio/>} label="Insertion Sort"/>
                <FormControlLabel value="mergeSort" control={<Radio/>} label="Merge Sort"/>
                <FormControlLabel value="quickSort" control={<Radio/>} label="Quick Sort"/>
            </RadioGroup>
        </FormControl>
    }
}
