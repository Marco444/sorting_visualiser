import {addSwapAnimation} from "../animations/AnimationsEngine";
import {getSortedAnimations} from "../animations/AnimationsEngine";
import {swap} from "../utils";

/**
 * Information used in the components part once an algorithm is selected
 * **/

export const quickSortInfo =
    `     Quick Sort works by recursively partitioning the list of elements based upon a pivot element and then sorting
       each subarray recursively by putting the pivot in the correct order. 
       
       It works similarly to Merge Sort because both are divide and conquer algorithms.Their differences being how they
       divide into subproblems and how they merge.`

export const quickSortComplexity =
    `
        In terms of time complexity its average case is O(n*logn), worst case is O(n^2), and best is O(n*logn), while
        space complexity is at worst linear.
    `
/**
 * Function same form for all the algorithms it takes an array and returns an array with the animations
 * corresponding to sorting the input array with the sorting algorithm
 * **/

export default function getQuickSortAnimations(array) {
    let animations = []

    quickSort(animations, array, 0, array.length - 1)

    return animations.concat(getSortedAnimations(array))
}

function quickSort(animations, array, left, right) {
    if (left < right) {
        let p = partition(animations, array, left, right)
        quickSort(animations, array, left, p - 1)
        quickSort(animations, array, p + 1, right)
    }
}

function partition(animations, array, left, right) {

    let pivot = array[right]
    let i = left - 1

    for (let j = left; j <= right - 1; j++) {
        if (array[j] < pivot) {
            i++;

            addSwapAnimation(i, j, animations)
            swap(i, j, array)
        }
    }

    addSwapAnimation(i + 1, right, animations)
    swap(i + 1, right, array)


    return i + 1
}

