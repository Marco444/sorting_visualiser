
// Change this value for the number of bars (value) in the array.
import {ColorAnimation, Animation} from "../AnimationsEngine";



export default function getShuffleAnimations(array) {
    let animationsStart = []
    let animationEnd = []
    let animationsReset = []

    for (let i = 0; i < array.length - 1; i++) {
        animationsStart.push(new Animation(ColorAnimation.ShuffleBegin, i, i))
        animationEnd.push(new Animation(ColorAnimation.ShuffleEnd, i, i))
        animationsReset.push(new Animation(ColorAnimation.ShuffleReset, i, i))
    }
    return [animationsStart, animationEnd, animationsReset]

}