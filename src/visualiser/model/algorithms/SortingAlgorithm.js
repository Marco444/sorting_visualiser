import getMergeSortAnimations from "./mergeSort";
import getQuickSortAnimations from "./quickSort";
import getRadixSortAnimations from "./radixSort";
import getBubbleSortAnimations from "./bubbleSort";

const bubbleSortInfo =
    `   Bubble sort works by traversing all the elements the amount of
        times being equal to the number of elements, and
        whenever two adyacent elements can be shifted in the
        correct order, they are shifted. O(n^2) time complexity `

const mergeSortInfo =
   `    Merge Sort works by recursively dividing the list of elements in half
    until it can't anymore. Then it merges all the subarrays in the corresponding
     order until we dont have more subarrays to merge. O(n*logn) time complexity`

const radixSortInfo =
    `   It works by decomposing each element in digits and for every digit ordering
     the elements upon it (without loosing order from previous digits). It is different
      from the others as it doesn't soley compare elements when ordering them. As a result
       it manages to have time complexity O(n) provided the range of numbers isnt crazy high (polynomial)`

const quickSortInfo =
  `     It works by recursively partitioning the list of elements based upon a pivot element and then sorting
       each subarray recursively by putting the pivot in the correct order. O(n*logn) time complexity `

export class SortingAlgorithm {

    static mergeSort = new SortingAlgorithm(mergeSortInfo, (array) => getMergeSortAnimations(array))
    static quickSort = new SortingAlgorithm(quickSortInfo, (array) => getQuickSortAnimations(array))
    static radixSort = new SortingAlgorithm(radixSortInfo, (array) => getRadixSortAnimations(array))
    static bubbleSort = new SortingAlgorithm(bubbleSortInfo, (array) => getBubbleSortAnimations(array))


    constructor(text, animations) {
        this.text = text
        this.animations = animations
    }

    getAnimations(array) {
        return this.animations(array)
    }

}