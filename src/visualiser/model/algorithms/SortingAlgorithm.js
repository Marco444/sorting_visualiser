import getMergeSortAnimations, {mergeSortComplexity, mergeSortInfo} from "./mergeSort";
import getQuickSortAnimations, {quickSortComplexity, quickSortInfo} from "./quickSort";
import getRadixSortAnimations, {radixSortComplexity, radixSortInfo} from "./radixSort";
import getBubbleSortAnimations, {bubbleSortComplexity, bubbleSortInfo} from "./bubbleSort";
import getSelectionSortAnimations, {selectionSortComplexity, selectionSortInfo} from "./selectionSort";
import getInsertionSortAnimations, {insertionSortComplexity, insertionSortInfo} from "./insertionSort";
import getHeapSortAnimations, {heapSortComplexity, heapSortInfo} from "./heapSort";


/**
 * Designed to encapsulate all the different sorting algorithms into a kind of enum (came from coding a lot in java),
 * such that we can directly update the current algorithm in App.js to one of these enum values, and call methods from it
 * and get different functionality for the same method calls given the current algorithm selected
 * **/

export class SortingAlgorithm {

    static mergeSort = new SortingAlgorithm(mergeSortInfo, mergeSortComplexity, (array) => getMergeSortAnimations(array))
    static quickSort = new SortingAlgorithm(quickSortInfo, quickSortComplexity, (array) => getQuickSortAnimations(array))
    static radixSort = new SortingAlgorithm(radixSortInfo, radixSortComplexity, (array) => getRadixSortAnimations(array))
    static bubbleSort = new SortingAlgorithm(bubbleSortInfo, bubbleSortComplexity, (array) => getBubbleSortAnimations(array))
    static selectionSort = new SortingAlgorithm(selectionSortInfo, selectionSortComplexity, (array) => getSelectionSortAnimations(array))
    static insertionSort = new SortingAlgorithm(insertionSortInfo, insertionSortComplexity, (array) => getInsertionSortAnimations(array))
    static heapSort = new SortingAlgorithm(heapSortInfo, heapSortComplexity, (array) => getHeapSortAnimations(array),)
    static none = new SortingAlgorithm("", "", () => ([]),)

    constructor(text, complexity, animations) {
        this.text = text
        this.animations = animations
        this.complexity = complexity
    }

    getAnimations(array) {
        return this.animations(array)
    }

}

