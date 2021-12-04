
export function newShuffledArray(length, minValue, maxValue) {
    const array = [];
    for (let i = 0; i < length; i++) {
        array.push(randomIntFromInterval(minValue, maxValue));
    }
    return array;
}

function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}
