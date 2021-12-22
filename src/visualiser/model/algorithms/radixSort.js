import {addCopyAnimation} from "../animations/AnimationsEngine";

export default function getRadixSortAnimations(array) {
    let animations = []

    let maximum = Math.max(...array)

    // Do counting sort for every digit.
    for (let exp = 1; Math.floor(maximum / exp) > 0; exp *= 10)
        countSort(array, exp, animations);

    return animations
}


function countSort(array, exp, animations)
{
    const output = new Array(array.length); // output array
    const count = []
    const resetAnimations = [];

    // Store count of occurrences in count[]
    for (let i = 0; i < array.length; i++)
        count[Math.floor(array[i] / exp) % 10]++;

    // Change count[i] so that count[i] now contains
    // actual position of this digit in output[]
    for (let i = 1; i < 10; i++)
        count[i] += count[i - 1];

    // Build the output array
    for (let i = array.length - 1; i >= 0; i--) {
        output[count[Math.floor(array[i] / exp) % 10] - 1] = array[i];
        count[Math.floor(array[i] / exp) % 10]--;
    }

    // Copy the output array to arr[], so that arr[] now
    // contains sorted numbers according to current digit
    for (let i = 0; i < array.length; i++) {
        addCopyAnimation(i, i, animations, output, resetAnimations)
        array[i] = output[i];
    }

    animations.push(...resetAnimations)
}
