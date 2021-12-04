//ANIMATIONS
const SELECTION_COLOR = '#a275ff';
const PRIMARY_COLOR = '#21e892';
const SHUFFLE_COLOR = '#ff8eb2';
const COMPARING_COLOR = 'rgba(83,126,255,0.98)';

class SwapAnimation {
    static begin = new SwapAnimation();
    static end;

    apply(current, next) {
        const auxWidth = next.style.width
        next.style.width = current.style.width
        current.style.width = auxWidth
    }
}

class ColorAnimation {

    static ComparisonBegin = new ColorAnimation(COMPARING_COLOR);
    static ComparisonEnd = new ColorAnimation(PRIMARY_COLOR);

    static SelectionBegin = new ColorAnimation(SELECTION_COLOR);
    static SelectionEnd = new ColorAnimation(PRIMARY_COLOR);

    constructor(color) {
        this.color = color
    }

    apply(current, next) {
        current.style.backgroundColor = this.color
        next.style.backgroundColor = this.color
    }
}


class Animation {

    constructor(type, i, j) {
        this.type = type;
        this.i = i;
        this.j = j;
    }

    applyTo(array) {
        this.type.apply(array[this.i], array[this.j])
    }

}


export default function getBubbleSortAnimations(array2) {
    const animations = []
    const array = array2

    if (array.length === 0) return animations;

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {

            if (array[j] > array[j + 1]) {       //we need to swap the elements in the array, and

                //We color the bars selected, uncolor them, and then swap them
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

//UTILITY METHODS

function equalArrays(array1, array2) {
    if (array1.length !== array2.length) return false;
    for (let i = 0; i < array1.length; i++)
        if (array1[i] !== array2[i])
            return false;
    return true;
}
