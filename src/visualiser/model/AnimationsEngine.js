//ANIMATIONS
const SELECTION_COLOR = '#a275ff';
const PRIMARY_COLOR = '#21e892';
const SHUFFLE_COLOR = '#ff8eb2';
const COMPARING_COLOR = 'rgba(83,126,255,0.98)';

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

    static ComparisonBegin = new ColorAnimation(COMPARING_COLOR);
    static ComparisonEnd = new ColorAnimation(PRIMARY_COLOR);

    static SelectionBegin = new ColorAnimation(SELECTION_COLOR);
    static SelectionEnd = new ColorAnimation(PRIMARY_COLOR);

    static ShuffleBegin = new ColorAnimation(SHUFFLE_COLOR);
    static ShuffleEnd = new ColorAnimation(PRIMARY_COLOR);

    constructor(color) {
        this.color = color
    }


    apply(current, next) {
        current.style.backgroundColor = this.color
        next.style.backgroundColor = this.color
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
