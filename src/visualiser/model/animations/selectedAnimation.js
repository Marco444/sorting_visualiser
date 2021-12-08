import {Animation, AnimationReset, ColorAnimation} from "../AnimationsEngine";

export default function getSelectedAnimation(array) {
    let animationsSet = [], animationsReset = []

    for(let i = 0; i < array.length; i++) {
        animationsSet.push(new Animation(ColorAnimation.ModifiedBegin, i, i))
        animationsSet.push(new Animation(ColorAnimation.ModifiedEnd, i, i))
        animationsReset.push(new Animation(AnimationReset.Modified, i, i ))
    }

    return animationsSet.concat(animationsReset)
}
