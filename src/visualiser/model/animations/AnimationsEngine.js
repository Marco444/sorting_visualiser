
class SwapAnimation {
    static begin = new SwapAnimation();
    static end;

    apply(current, next) {
        const auxWidth = next.style.width
        next.style.width = current.style.width
        current.style.width = auxWidth
    }
}

export class CopyAnimation {

    constructor(newWidth) {
        this.newWidth = newWidth
    }

    apply(current) {
        current.style.width = `${this.newWidth}px`
    }
}


const defaultBarColor = "#47118f"
const algorithmSelectedColor = "#ffb4a1"
const selectedColor = "#21e892"
const sortedColor = "#e73068"

export class AnimationType {

    static AlgorithmSelection = new AnimationType(800, algorithmSelectedColor, defaultBarColor)
    static SliderSelection = new AnimationType(800, selectedColor, defaultBarColor)
    static Sorted = new AnimationType(800, sortedColor, defaultBarColor)
    static Shuffle = new AnimationType(800, sortedColor, defaultBarColor)

    constructor(duration, color, defaultColor) {
        this.duration = duration
        this.color = color
        this.defaultColor = defaultColor
    }


    apply(current, next) {
        current.animate(
            {backgroundColor: [this.color, this.defaultColor]}
            , this.duration)

        next.animate(
            {backgroundColor: [this.color, this.defaultColor]}
            , this.duration)
    }
}

export class Animation {

    constructor(type, i, j) {
        this.type = type;
        this.i = i;
        this.j = j;
    }

    applyTo(array) {
        this.type.apply(array[this.i], array[this.j])
    }

}


function animateBarsWith(array, animation) {
    let animationsSet = []

    for(let i = 0; i < array.length; i++)
        animationsSet.push(new Animation(animation, i, i))

    return animationsSet
}

export function getSortedAnimations(array) {
   return animateBarsWith(array, AnimationType.Sorted)
}

export function getShuffleAnimations(array) {
  return animateBarsWith(array, AnimationType.Shuffle)
}

export function getSelectedAnimations(array) {
   return animateBarsWith(array, AnimationType.SliderSelection)
}

export function getAlgorithmSelectionAnimation(array) {
    return animateBarsWith(array, AnimationType.AlgorithmSelection)
}

export function addSwapAnimation(i, j, setAnimations) {
    setAnimations.push(new Animation(AnimationType.SliderSelection, i, j))
    setAnimations.push(new Animation(SwapAnimation.begin, i, j))
}

export function addCopyAnimation(i, j, setAnimations, auxiliaryArray) {
    setAnimations.push(new Animation(AnimationType.SliderSelection, i, j))
    setAnimations.push(new Animation(new CopyAnimation(auxiliaryArray[i]), j))
}
