import {fade, selectFade, sortedFade, modifiedFade} from "./AnimationsEngine.css"
import {unFade, selectUnFade, sortedUnFade, sorted, modifiedUnFade} from "./AnimationsEngine.css"

//ANIMATIONS
export const SELECTION_COLOR = '#a275ff';
export const PRIMARY_COLOR = '#21e892';
export const SHUFFLE_COLOR = '#ff8eb2';
export const COMPARING_COLOR = 'rgba(83,126,255,0.98)';

export class SwapAnimation {
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
        //current.style.setProperty('--newWidth', this.newWidth);
        //current.style.setProperty('--currentWidth', current.style.width);
        //current.classList.add('resizeFade')
    }
}

export class AnimationReset {

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

export class ColorAnimation {

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
