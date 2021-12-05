
// Change this value for the number of bars (value) in the array.
import {ColorAnimation, Animation} from "../AnimationsEngine";



export default function getShuffleAnimations(array) {
    let animations = []

    for (let i = 0; i < array.length - 1; i++) {
        animations.push(new Animation(ColorAnimation.ShuffleBegin, i, i))
        animations.push(new Animation(ColorAnimation.ShuffleEnd, i, i))
    }

    return animations

}