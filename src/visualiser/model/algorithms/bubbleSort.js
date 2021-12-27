import {addSwapAnimation, getSortedAnimations,} from "../animations/AnimationsEngine";

export default function getBubbleSortAnimations(array) {
    let setAnimations = []

    if (array.length === 0) return setAnimations;

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] > array[j + 1]) {

                addSwapAnimation(j, j + 1, setAnimations)

                //SWAP ELEMENTS
                const aux = array[j];
                array[j] = array[j + 1];
                array[j + 1] = aux;
            }
        }

    }


    return setAnimations.concat(getSortedAnimations(array))
}
