import {Animation, AnimationReset, ColorAnimation, SwapAnimation} from "../../AnimationsEngine";

export default function getBubbleSortAnimations(array) {
    let animationsSet = []
    let animationsReset = []

    if (array.length === 0) return animationsSet;

    for (let i = 0; i < array.length; i++) {

        for (let j = 0; j < array.length; j++) {

            //animations.push(new Animation(ColorAnimation.ComparisonBegin, i, j))
            //animations.push(new Animation(ColorAnimation.ComparisonEnd, i, j))

            if (array[j] > array[j + 1]) {

                animationsSet.push(new Animation(ColorAnimation.SelectBegin, j + 1, j));
                animationsSet.push(new Animation(ColorAnimation.SelectEnd, j + 1, j));

                animationsReset.push(new Animation(AnimationReset.Select, j + 1, j));

                animationsSet.push(new Animation(SwapAnimation.begin, j + 1, j));

                //SWAP ELEMENTS
                const aux = array[j];
                array[j] = array[j + 1];
                array[j + 1] = aux;
            }
        }

        animationsSet = animationsSet.concat(animationsReset)
        animationsReset = []
    }

    animationsSet = animationsSet.concat(animationsReset);
    animationsReset = []

    for(let i = 0; i < array.length; i++) {
        animationsSet.push(new Animation(ColorAnimation.SortedBegin, i, i))
        animationsSet.push(new Animation(ColorAnimation.SortedEnd, i, i))
        animationsReset.push(new Animation(AnimationReset.Sorted, i, i ))
    }

    return animationsSet.concat(animationsReset)
}
