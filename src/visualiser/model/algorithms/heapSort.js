/**
 * Information used in the components part once an algorithm is selected
 * **/
import {addSwapAnimation} from "../animations/AnimationsEngine";
import {swap} from "../utils";


export const heapSortInfo =
    `
        Heap Sort works quite similarly to selection sort. It keeps an unsorted and a sorted region of the array,
        and inserts every element from the unsorted region into their correct position in the sorted region. It differs
        from selection sort in that it doesn't traverse all elements to know where it should be, but it pops it from
        a heap to quickly find the element. Because of this its time complexity comes to be the same as the lower bound
        for comparison-based sorts.
    `

export const heapSortComplexity =
    `
        In terms of time complexity its best, average and worst case are all O(n*logn), while its space complexity is constant. 
       
    `

/**
 * Function same form for all the algorithms it takes an array and returns an array with the animations
 * corresponding to sorting the input array with the sorting algorithm
 * **/

export default function getHeapSortAnimations(array) {
    let animations = [];

    buildMaxHeap(array, animations);

    for(let lastNotSwapped = array.length - 1; lastNotSwapped > 0; lastNotSwapped--) {

        //we push the biggest to the last element not yet swap
        swap(0, lastNotSwapped, array);
        addSwapAnimation(0, lastNotSwapped, animations);

        siftDown(0, lastNotSwapped - 1, array, animations);
    }

    return animations;
}

function buildMaxHeap(array, animations) {
    const firstParent = Math.floor((array.length - 2) / 2);
    for(let current = firstParent; current >= 0; current--)
        siftDown(current, array.length - 1, array, animations);
}

function siftDown(current, end, heap, animations) {
    let childOne = current * 2 + 1;

    while(childOne <= end) {
        const childTwo = current * 2 + 2 <= end ? current * 2 + 2 : -1;
        let toSwap;

        if(childTwo !== -1 && heap[childTwo] > heap[childOne]) toSwap = childTwo;
        else toSwap = childOne;

        if(heap[toSwap] > heap[current]) {
            swap(current, toSwap, heap);
            addSwapAnimation(current, toSwap, animations);
            current = toSwap;
            childOne = current * 2 + 1;
        } else {
            return;
        }
    }
}
