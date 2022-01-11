import {swap} from "./SortingAlgorithm";
import {addSwapAnimation} from "../animations/AnimationsEngine";

export const insertionSortInfo =
    `
    
    `
export const insertionSortComplexity =
    `
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