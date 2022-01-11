import {FormControl, FormControlLabel, Radio, RadioGroup, Stack, Typography} from "@mui/material";
import SortRoundedIcon from "@mui/icons-material/SortRounded";
import React from "react";

export const AlgorithmSelector = ({stackWidth, mergeSortButtonClicked, bubbleSortButtonClicked,
                                  isBusy, quickSortButtonClicked, radixSortButtonClicked,
                                  selectionSortButtonClicked, insertionSortButtonClicked, heapSortButtonClicked}) => {
    return (

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
                    bgcolor: '#ffb4a1',
                    color: 'white',
                    paddingLeft: 2,
                    paddingTop: 2,
                    paddingBottom: 2,
                    fontWeight: 'bold',
                }}>
                <Typography id="animation-slider" sx={{
                    fontWeight: 'bold',
                    display: 'flex',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                }} gutterBottom> Algorithms
                    <SortRoundedIcon sx={{paddingLeft: 1}}/>
                </Typography>
                <Stack sx={{fontWeight: 'bold'}}>
                    <FormControlLabel value="selectionSort" control={<Radio/>} label="Selection Sort"
                                      onChange={selectionSortButtonClicked} disabled={isBusy}>
                    </FormControlLabel>

                    <FormControlLabel value="insertionSort" control={<Radio/>} label="Insertion Sort"
                                      onChange={insertionSortButtonClicked} disabled={isBusy} />

                    <FormControlLabel value="bubbleSort" control={<Radio/>}  label="Bubble Sort"
                                      onChange={bubbleSortButtonClicked} disabled={isBusy}/>

                    <FormControlLabel value="heapSort" control={<Radio/>}  label="Heap Sort"
                                      onChange={heapSortButtonClicked} disabled={isBusy}/>

                    <FormControlLabel value="mergeSort" control={<Radio/>} label="Merge Sort"
                                      onChange={mergeSortButtonClicked} disabled={isBusy} />

                    <FormControlLabel value="quickSort" control={<Radio/>} label="Quick Sort"
                                      onChange={quickSortButtonClicked} disabled={isBusy}/>

                    <FormControlLabel value="radixSort" control={<Radio/>} label="Radix Sort"
                                      onChange={radixSortButtonClicked} disabled={isBusy}/>
                </Stack>
            </RadioGroup>
        </FormControl>


    );
}