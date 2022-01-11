import {swap} from "./SortingAlgorithm";
import {addSwapAnimation} from "../animations/AnimationsEngine";

export const insertionSortInfo =
    `
    Insertion Sort works by traversing element in the array and putting it in the correct position, for 
    every element in the array, it swaps it with every other previous element until it's in the correct
    position relative to the previous element.
    
    It is worth mentioning that of the cuadratic sorting family its usually the fastest.
    `
export const insertionSortComplexity =
    `
        In terms of time complexity its best, average and worst case are all O(n^2), while its space complexity is constant. 
    `

export default function getInsertionSortAnimations(array) {
    let animations = [];

    for(let i = 1; i < array.length; i++) {
        let j = i;
        while(j > 0 && array[j] < array[j - 1]) {
            swap(j, j - 1, array);
            addSwapAnimation(j, j - 1, animations);
            j -= 1;
        }
    }

    return animations;
}