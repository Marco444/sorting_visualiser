import {addSwapAnimation, getSortedAnimations,} from "../animations/AnimationsEngine";
import {swap} from "../utils";

/**
 * Information used in the components part once an algorithm is selected
 * **/

export const bubbleSortInfo =
    `   Bubble sort works by traversing all the elements the amount of
        times being equal to the number of elements, and
        whenever two adjacent elements can be shifted in the
        correct order, they are shifted.
        
        Its applications often involve places where memory is scarce
        and the amount of elements isn't extremely big. Although within
        cuadratic algorithms it's usually outperformed by insertion sort`

export const bubbleSortComplexity =
    `
        In terms of time complexity its average, worst and best case are all O(n^2),
        while its space complexity is constant as its an in-place algorithm.
    `

/**
 * Function same form for all the algorithms it takes an array and returns an array with the animations
 * corresponding to sorting the input array with the sorting algorithm
 * **/

export default function getBubbleSortAnimations(array) {
    let setAnimations = []

    if (array.length === 0) return setAnimations;

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {

                addSwapAnimation(j, j + 1, setAnimations)
                swap(j, j + 1, array)
            }
        }

    }


    return setAnimations.concat(getSortedAnimations(array))
}
