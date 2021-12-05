import {Animation, ColorAnimation, CopyAnimation} from "../../AnimationsEngine"
import {equalArrays} from "../../utils";


export default function getMergeSortAnimations(array) {
    const animations = [];
    console.log('merge sort animations')

    if (array.length <= 1) return array;

    const auxiliaryArray = array.slice();

    mergeSort(array, 0, array.length - 1, auxiliaryArray, animations);

    return animations;
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

            animation(i, k, animations, auxiliaryArray)
            mainArray[k++] = auxiliaryArray[i++];

        } else {
            animation(j, k, animations, auxiliaryArray)
            mainArray[k++] = auxiliaryArray[j++];
        }
    }

    while (i <= middle) {
        animation(i, k, animations, auxiliaryArray)
        mainArray[k++] = auxiliaryArray[i++];
    }

    while (j <= right) {
        animation(j, k, animations, auxiliaryArray)
        mainArray[k++] = auxiliaryArray[j++];
    }
}

function animation(i, k, animations, auxiliaryArray) {
    animations.push(new Animation(ColorAnimation.SelectionBegin, i, k))
    animations.push(new Animation(ColorAnimation.SelectionEnd, i, k))
    animations.push(new Animation(new CopyAnimation(auxiliaryArray[i]), k, i))
}