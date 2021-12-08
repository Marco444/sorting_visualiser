import {Animation, AnimationReset, ColorAnimation, CopyAnimation} from "../../AnimationsEngine"
import {equalArrays} from "../../utils";
import getSortedAnimation from "../sortedAnimation";

export default function getMergeSortAnimations(array) {
    const animations = [];
    console.log('merge sort animations')

    if (array.length <= 1) return array;

    const auxiliaryArray = array.slice();

    mergeSort(array, 0, array.length - 1, auxiliaryArray, animations);

    return animations.concat(getSortedAnimation(array));
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

            animation(i, k, animations, auxiliaryArray, resetAnimations)
            mainArray[k++] = auxiliaryArray[i++];

        } else {
            animation(j, k, animations, auxiliaryArray, resetAnimations)
            mainArray[k++] = auxiliaryArray[j++];
        }
    }

    while (i <= middle) {
        animation(i, k, animations, auxiliaryArray, resetAnimations)
        mainArray[k++] = auxiliaryArray[i++];
    }

    while (j <= right) {
        animation(j, k, animations, auxiliaryArray, resetAnimations)
        mainArray[k++] = auxiliaryArray[j++];
    }


    animations.push(...resetAnimations)
}

function animation(i, k, setAnimations, auxiliaryArray, resetAnimations) {
    setAnimations.push(new Animation(ColorAnimation.SelectBegin, i, k))
    setAnimations.push(new Animation(ColorAnimation.SelectEnd, i, k))
    setAnimations.push(new Animation(new CopyAnimation(auxiliaryArray[i]), k, i))
    resetAnimations.push(new Animation(AnimationReset.Select, i, k))
}