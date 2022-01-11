import {addSwapAnimation} from "../animations/AnimationsEngine";
import {swap} from "./SortingAlgorithm";

export const selectionSortInfo =
    `
        Selection Sort works by traversing every element in the array, assuming its the smallest or biggest,
        and then for every element to the right updating it so that it is the smallest or biggest of all the
        elements to its right (in the unsorted array), then it swaps it into the index that it should have had
        and continues until no more elements in the unsorted part are left. 
    `

export const selectionSortComplexity =
    `
        In terms of time complexity its best, average and worst case are all O(n^2), while its space complexity is constant. 
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

