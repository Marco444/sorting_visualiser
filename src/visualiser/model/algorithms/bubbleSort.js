import {Animation, ColorAnimation, SwapAnimation} from "../Animations";

export default function getBubbleSortAnimations(array) {
    const animations = []

    if (array.length === 0) return animations;

    for (let i = 0; i < array.length; i++) {

        for (let j = 0; j < array.length - i - 1; j++) {

            //animations.push(new Animation(ColorAnimation.ComparisonBegin, i, j))
            //animations.push(new Animation(ColorAnimation.ComparisonEnd, i, j))

            if (array[j] > array[j + 1]) {

                animations.push(new Animation(ColorAnimation.SelectionBegin, j + 1, j));
                animations.push(new Animation(ColorAnimation.SelectionEnd, j + 1, j));
                animations.push(new Animation(SwapAnimation.begin, j + 1, j));

                //SWAP ELEMENTS
                const aux = array[j];
                array[j] = array[j + 1];
                array[j + 1] = aux;
            }
        }
    }

    return animations;
}
