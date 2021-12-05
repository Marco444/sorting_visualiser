
import fade from "./AnimationsEngine.css"
import unFade from "./AnimationsEngine.css"

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
    }
}

export class ColorAnimation {

    static ComparisonBegin = new ColorAnimation("comparisonFade", this.startAnimation, 1);
    static ComparisonEnd = new ColorAnimation("comparisonFade", this.endAnimation, 0);

    static SelectionBegin = new ColorAnimation("selectionFade", this.startAnimation, 1);
    static SelectionEnd = new ColorAnimation("selectionFade", this.endAnimation, 0);

    static ShuffleBegin = new ColorAnimation('fade', this.startAnimation, 1);
    static ShuffleEnd = new ColorAnimation('unFade', this.endAnimation, 1);
    static ShuffleReset = new ColorAnimation('fade', this.endAnimation, 0)

    static startAnimation(documentElement, animationClassName) {
        documentElement.classList.add(animationClassName)
        //documentElement.style.background = SHUFFLE_COLOR
    }

    static endAnimation(documentElement, animationClassName) {
        //documentElement.style.background = PRIMARY_COLOR
        documentElement.classList.remove(animationClassName)
    }

    constructor(animationClassName, animate, startAnimation) {
        this.animationClassName = animationClassName
        this.animate = animate
        this.startAnimationTrue = startAnimation
    }

    apply(current, next) {
        //this.animate(current, this.animationClassName)

        if(this.startAnimationTrue) {
            next.classList.add(this.animationClassName)
            current.classList.add(this.animationClassName)
        } else {
            next.classList.remove(this.animationClassName)
            current.classList.remove(this.animationClassName)
            next.classList.remove('unFade')
            current.classList.remove('unFade')
        }

        //this.animate(next, this.animationClassName)
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
