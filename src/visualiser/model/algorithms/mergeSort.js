import {Animation, ColorAnimation, SwapAnimation} from "../Animations"
import {equalArrays} from "../utils";


export default function getMergeSortAnimations(array2) {
    const animations = []

    const array = array2.map( (a) => a) //IF I DON'T DO THE MAP WE AREN'T COPYING IT

    console.log(array)

    if (array.length === 0) return animations;

    //We pass the array without a wrapper, because we can access the array
    //(pass by value of objects and arrays is reference copy)
    mergeSort(array, animations, 0, array.length)

    console.log(array2.sort((a, b) => a > b))
    console.log(array)
    console.log(equalArrays(array2.sort((a, b) => a > b), array))
    return animations;
}

//DIVIDE PART OF DIVIDE AND CONQUER
function mergeSort(wrapper, animations, left, right) {
    if(right > left) {
        const middle = Math.floor(left + (right - left) / 2)
        console.log(middle)
        mergeSort(wrapper, animations, left, middle)
        mergeSort(wrapper, animations,middle + 1, right)
        merge(wrapper, animations, left, middle, right)
    }
}

//MERGE/CONQUER PART OF DIVIDE AND CONQUER
function merge(wrapper, animations, left, middle, right) {




}