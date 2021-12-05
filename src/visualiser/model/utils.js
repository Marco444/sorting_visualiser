
export function newShuffledArray(length, minValue, maxValue) {
    const array = [];
    for (let i = 0; i <= length; i++) {
        array.push(randomIntFromInterval(minValue, maxValue));
    }
    return array;
}

function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export function equalArrays(array1, array2) {
    if (array1.length !== array2.length) return false;
    for (let i = 0; i < array1.length; i++)
        if (array1[i] !== array2[i])
            return false;
    return true;
}
