import {addCopyAnimation} from "../animations/AnimationsEngine"
import {getSortedAnimations} from "../animations/AnimationsEngine";

export default function getMergeSortAnimations(array) {
    const animations = [];
    console.log('merge sort animations')

    if (array.length <= 1) return array;

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

    let resetAnimations = []

    while (i <= middle && j <= right) {
        if (auxiliaryArray[i] <= auxiliaryArray[j]) {

            addCopyAnimation(i, k, animations, auxiliaryArray, resetAnimations)
            mainArray[k++] = auxiliaryArray[i++];

        } else {
            addCopyAnimation(j, k, animations, auxiliaryArray, resetAnimations)
            mainArray[k++] = auxiliaryArray[j++];
        }
    }

    while (i <= middle) {
        addCopyAnimation(i, k, animations, auxiliaryArray, resetAnimations)
        mainArray[k++] = auxiliaryArray[i++];
    }

    while (j <= right) {
        addCopyAnimation(j, k, animations, auxiliaryArray, resetAnimations)
        mainArray[k++] = auxiliaryArray[j++];
    }


    animations.push(...resetAnimations)
}