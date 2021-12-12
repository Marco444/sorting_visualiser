import {fade, selectFade, sortedFade, modifiedFade} from "./AnimationsEngine.css"
import {unFade, selectUnFade, sortedUnFade, sorted, modifiedUnFade} from "./AnimationsEngine.css"
import {colors} from "@mui/material";

//ANIMATIONS
export const SELECTION_COLOR = '#a275ff';
export const PRIMARY_COLOR = '#21e892';
export const SHUFFLE_COLOR = '#ff8eb2';
export const COMPARING_COLOR = 'rgba(83,126,255,0.98)';

class SwapAnimation {
    static begin = new SwapAnimation();
    static end;

    apply(current, next) {
        const auxWidth = next.style.width
        next.style.width = current.style.width
        current.style.width = auxWidth
    }
}

class CopyAnimation {

    constructor(newWidth) {
        this.newWidth = newWidth
    }

    apply(current) {
        current.style.width = `${this.newWidth}px`
    }
}

class AnimationReset {

    static Shuffle = new AnimationReset('fade', 'unFade')
    static Select = new AnimationReset('selectFade', 'selectUnFade')
    static Sorted = new AnimationReset('sortedFade', 'sortedUnFade')
    static Modified = new AnimationReset('modifiedFade', 'modifiedUnFade')

    constructor(className1, className2) {
        this.className1 = className1
        this.className2 = className2
    }

    apply(current, next) {
        current.classList.remove(this.className1)
        current.classList.remove(this.className2)
        next.classList.remove(this.className1)
        next.classList.remove(this.className2)
    }
}

class ColorAnimation {

    static ShuffleBegin = new ColorAnimation('fade');
    static ShuffleEnd = new ColorAnimation('unFade');

    static SelectBegin = new ColorAnimation('selectFade');
    static SelectEnd = new ColorAnimation('selectUnFade');

    static SortedBegin = new ColorAnimation('sortedFade');
    static SortedEnd = new ColorAnimation('sortedUnFade');

    static ModifiedBegin = new ColorAnimation('modifiedFade');
    static ModifiedEnd = new ColorAnimation('modifiedUnFade');

    constructor(animationClassName) {
        this.animationClassName = animationClassName
    }

    apply(current, next) {
        next.classList.add(this.animationClassName)
        current.classList.add(this.animationClassName)
    }
}

class Animation {

    constructor(type, i, j) {
        this.type = type;
        this.i = i;
        this.j = j;
    }

    //Returns 1 or 0 depending whether the next animation needs to wait for it
    applyTo(array) {
        this.type.apply(array[this.i], array[this.j])
    }

}

function addAnimation(i, j, resetAnimations, setAnimations) {
    setAnimations.push(new Animation(ColorAnimation.SelectBegin, i, j))
    setAnimations.push(new Animation(ColorAnimation.SelectEnd, i, j))
    resetAnimations.push(new Animation(AnimationReset.Select, i, j))
}

function animateAllBarsWith(array, beginAnimation, endAnimation, resetAnimation) {
    let animationsSet = [], animationsReset = []

    for(let i = 0; i < array.length; i++) {
        animationsSet.push(new Animation(beginAnimation, i, i))
        animationsSet.push(new Animation(endAnimation, i, i))
        animationsReset.push(new Animation(resetAnimation, i, i ))
    }

    return animationsSet.concat(animationsReset)
}

export function getSortedAnimations(array) {
   return animateAllBarsWith(array, ColorAnimation.SortedBegin, ColorAnimation.SortedEnd, AnimationReset.Sorted)
}

export function getShuffleAnimations(array) {
  return animateAllBarsWith(array, ColorAnimation.ShuffleBegin, ColorAnimation.ShuffleEnd, AnimationReset.Shuffle)
}

export function getSelectedAnimations(array) {
   return animateAllBarsWith(array, ColorAnimation.SelectBegin, ColorAnimation.SelectEnd, AnimationReset.Select)
}

export function addSwapAnimation(i, j, setAnimations, resetAnimations) {
    addAnimation(i, j, resetAnimations, setAnimations)
    setAnimations.push(new Animation(SwapAnimation.begin, i, j))
}

export function addCopyAnimation(i, j, setAnimations, auxiliaryArray, resetAnimations) {
    addAnimation(i, j, resetAnimations, setAnimations)
    setAnimations.push(new Animation(new CopyAnimation(auxiliaryArray[i]), j))
}
