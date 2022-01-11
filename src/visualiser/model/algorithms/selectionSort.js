import {addSwapAnimation} from "../animations/AnimationsEngine";
import {swap} from "./SortingAlgorithm";

export const selectionSortInfo =
    `
    
    `

export const selectionSortComplexity =
    `
    `

export default function getSelectionSortAnimations(array) {

    let animations = [];

    let start = 0;
    while(start < array.length - 1) {
        let smallest = start;

        for(let i = start + 1; i < array.length; i++){
            if(array[smallest] > array[i]) smallest = i;
        }

        addSwapAnimation(start, smallest, animations)
        swap(start, smallest, array);

        start++;
    }
    return animations;
}

