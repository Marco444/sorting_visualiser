import {equalArrays} from "../utils";
import {addCopyAnimation, addSwapAnimation} from "../animations/AnimationsEngine";
import {getSortedAnimations} from "../animations/AnimationsEngine";

export default function getQuickSortAnimations(array){
    let animations = []

    quickSort(animations, array, 0, array.length - 1)

    return animations.concat(getSortedAnimations(array))
}

function quickSort(animations, array, left, right){
    if(left < right){
        let p = partition(animations, array, left, right)
        quickSort(animations, array, left, p - 1)
        quickSort(animations, array, p + 1, right)
    }
}

function partition(animations, array, left, right) {

    let resetAnimations = []
    let pivot = array[right]
    let i = left - 1

    for(let j = left; j <= right - 1; j++) {
        if(array[j] < pivot){
            i++;

            addSwapAnimation(i, j, animations, array, resetAnimations)

            let aux = array[i]
            array[i] = array[j]
            array[j] = aux
        }
    }

    addSwapAnimation(i + 1, right, animations, array, resetAnimations)

    let aux = array[i + 1]
    array[i + 1] = array[right]
    array[right] = aux

    animations.push(...resetAnimations)

    return i + 1
}

