import {Box, Stack, Typography} from "@mui/material";
import React from "react";

export const InformationBox = ({selected, width}) => {

    const bubbleSortInfo =
        <Typography>
        Bubble sort is an algorithm with O(N^2) complexity
        it simply traverses all the elements the amount of
        times being equal to the number of elements, and
        whenever two adyacent elements can be shifted in the
        correct order, they are shifted
         </Typography>

    const mergeSortInfo =
        <Typography>
           Merge sort is an algorithm with O(N*logN) complexity,
           it works by dividing the array recursively in half (until
           it can't anymore), and then merges each divided array in
           the desired order
        </Typography>

    const radixSortInfo =
        <Typography>
            Radix sort is an algorithm with O(U) complexity,
            with U the range of the elements. It's the only algorithm
            that doesn't work by simply comparing elements, thus it's
            outside the comparison model, achieving linear complexity
        </Typography>

    const quickSortInfo =
        <Typography>
            Quick sort is an algorithm with O(N*logN) complexity,
            it works by picking a pivot element and then sorting
            the subsequent arrays created
        </Typography>

    return (
        <Stack>
        { selected !== "none" && <Box sx={{
            padding: 2,
            width: width,
            backgroundColor: '#ffbdb1',
            marginTop: 1,
            color: "white"
        }}>
            <Typography id="infog" sx={{
                fontWeight: 'bold',
            }} gutterBottom> Information </Typography>
            {selected === "bubbleSort" && bubbleSortInfo}
            {selected === "mergeSort" && mergeSortInfo}
            {selected === "quickSort" && quickSortInfo}
            {selected === "radixSort" && radixSortInfo}
        </Box>
        }
        </Stack>
    );
}