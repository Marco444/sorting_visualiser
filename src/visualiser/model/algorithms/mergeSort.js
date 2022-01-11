import {addCopyAnimation} from "../animations/AnimationsEngine"
import {getSortedAnimations} from "../animations/AnimationsEngine";

export const mergeSortInfo =
    `    Merge Sort works by recursively dividing the list of elements in half
        until it can't anymore. Then it merges all the subarrays, maintaining the correct
        order of the elements, until we dont have more subarrays to merge. 
        
        Like Quick Sort, merge sort is a divide and conquer algorithm. These algorithms work
        by dividing the input based on a heuristic (in this case by half, but can be in even 
        and odd for example). Then solves each of the sub-problems, and finally merges all of
        them together.`

export const mergeSortComplexity =
    `
        In terms of time complexity its best, worst and average cases are all O(n*logn), while 
        space complexity is at worst linear.
    `

export default function getMergeSortAnimations(array) {
    const animations = [];
    const auxiliaryArray = array.slice();

    mergeSort(array, 0, array.length - 1, auxiliaryArray, animations);

    return animations.concat(getSortedAnimations(array));
}

function mergeSort(mainArray, left, right, auxiliaryArray, animations,) {
    if (left === right) return;
    const middle = Math.floor((left + right) / 2);
    mergeSort(auxiliaryArray, left, middle, mainArray, animations);
    mergeSort(auxiliaryArray, middle + 1, right, mainArray, animations);
    merge(mainArray, left, middle, right, auxiliaryArray, animations);
}

function merge(mainArray, left, middle, right, auxiliaryArray, animations) {
    let k = left;
    let i = left;
    let j = middle + 1;


    while (i <= middle && j <= right) {
        if (auxiliaryArray[i] <= auxiliaryArray[j]) {
            addCopyAnimation(i, k, animations, auxiliaryArray)
            mainArray[k++] = auxiliaryArray[i++];

        } else {
            addCopyAnimation(j, k, animations, auxiliaryArray)
            mainArray[k++] = auxiliaryArray[j++];
        }
    }

    while (i <= middle) {
        addCopyAnimation(i, k, animations, auxiliaryArray)
        mainArray[k++] = auxiliaryArray[i++];
    }

    while (j <= right) {
        addCopyAnimation(j, k, animations, auxiliaryArray)
        mainArray[k++] = auxiliaryArray[j++];
    }
}
