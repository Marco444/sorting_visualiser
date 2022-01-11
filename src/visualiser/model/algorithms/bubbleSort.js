import {addSwapAnimation, getSortedAnimations,} from "../animations/AnimationsEngine";
import {swap} from "./SortingAlgorithm";

export const bubbleSortInfo =
    `   Bubble sort works by traversing all the elements the amount of
        times being equal to the number of elements, and
        whenever two adyacent elements can be shifted in the
        correct order, they are shifted. O(n^2) time complexity `

export const bubbleSortComplexity =
    `
    
    `


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
