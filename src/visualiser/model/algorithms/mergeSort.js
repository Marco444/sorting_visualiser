import {Animation, ColorAnimation, CopyAnimation} from "../Animations"
import {equalArrays} from "../utils";


export default function getMergeSortAnimations(array) {
    const animations = [];

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

            animations.push(new Animation(ColorAnimation.SelectionBegin, k, i))
            animations.push(new Animation(ColorAnimation.SelectionEnd, k, i))
            animations.push(new Animation(CopyAnimation.begin, k, i))

            mainArray[k++] = auxiliaryArray[i++];
        } else {

            animations.push(new Animation(ColorAnimation.SelectionBegin, k, j))
            animations.push(new Animation(ColorAnimation.SelectionEnd, k, j))
            animations.push(new Animation(CopyAnimation.begin, k, j))

            mainArray[k++] = auxiliaryArray[j++];
        }
    }

    while (i <= middle) {

        animations.push(new Animation(ColorAnimation.SelectionBegin, k, i))
        animations.push(new Animation(ColorAnimation.SelectionEnd, k, i))
        animations.push(new Animation(CopyAnimation.begin, k, i))
        mainArray[k++] = auxiliaryArray[i++];
    }

    while (j <= right) {

        animations.push(new Animation(ColorAnimation.SelectionBegin, k, j))
        animations.push(new Animation(ColorAnimation.SelectionEnd, k, j))
        animations.push(new Animation(CopyAnimation.begin, k, j))
        mainArray[k++] = auxiliaryArray[j++];
    }
}