
/**
 * Information used in the components part once an algorithm is selected
 * **/

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
    return [];
}