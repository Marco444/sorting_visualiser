import {Animation, AnimationReset, ColorAnimation} from "../AnimationsEngine";

export default function getSortedAnimation(array) {
    let animationsSet = [], animationsReset = []

    for(let i = 0; i < array.length; i++) {
        animationsSet.push(new Animation(ColorAnimation.SortedBegin, i, i))
        animationsSet.push(new Animation(ColorAnimation.SortedEnd, i, i))
        animationsReset.push(new Animation(AnimationReset.Sorted, i, i ))
    }

    return animationsSet.concat(animationsReset)
}