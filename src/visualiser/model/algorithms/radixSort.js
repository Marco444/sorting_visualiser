import {
    Animation,
    AnimationType,
    CopyAnimation,
    getSortedAnimations
} from "../animations/AnimationsEngine";

/**
 * Information used in the components part once an algorithm is selected
 * **/

export const radixSortInfo =
    `   Radix Sort works by  creating and distributing elements into buckets according to their radix.
        For elements with more than one significant digit, this bucketing process is repeated for each digit,
        while preserving the ordering of the prior step, until all digits have been considered.
    `

export const radixSortComplexity =
    `
        In terms of time complexity its O(n) with the requirement that they are in the range 1 to n^c with c being a constant
        
        This means that for most numbers  we have linear complexity, the lower bound for any sorting algorithm! (we need
        to at least traverse every element to know how to order them) .
    `
/**
 * Function same form for all the algorithms it takes an array and returns an array with the animations
 * corresponding to sorting the input array with the sorting algorithm
 * **/

export default function getRadixSortAnimations(array) {
    let animations = []

    let idx1, idx2, idx3, len1, len2, radix, radixKey;
    let radices = {}, buckets = {}, num, curr;
    let currLen, radixStr, currBucket;

    len1 = array.length;
    len2 = 10;  // radix sort uses ten buckets

    // find the relevant radices to process for efficiency
    for (idx1 = 0;idx1 < len1;idx1++) {
        radices[array[idx1].toString().length] = 0;
    }

    // loop for each radix. For each radix we put all the items
    // in buckets, and then pull them out of the buckets.
    for (radix in radices) {
        // put each array item in a bucket based on its radix value
        len1 = array.length;
        for (idx1 = 0;idx1 < len1;idx1++) {
            curr = array[idx1];
            // item length is used to find its current radix value
            currLen = curr.toString().length;
            // only put the item in a radix bucket if the item
            // key is as long as the radix
            if (currLen >= radix) {
                // radix starts from beginning of key, so need to
                // adjust to get redix values from start of stringified key
                radixKey = curr.toString()[currLen - radix];
                // create the bucket if it does not already exist
                if (!buckets.hasOwnProperty(radixKey)) {
                    buckets[radixKey] = [];
                }
                // put the array value in the bucket
                buckets[radixKey].push(curr);
            } else {
                if (!buckets.hasOwnProperty('0')) {
                    buckets['0'] = [];
                }
                buckets['0'].push(curr);
            }
        }

        // for current radix, items are in buckets, now put them
        // back in the array based on their buckets
        // this index moves us through the array as we insert items
        idx1 = 0;

        // go through all the buckets
        for (idx2 = 0;idx2 < len2;idx2++) {
            // only process buckets with items
            if (buckets[idx2] != null) {
                currBucket = buckets[idx2];
                // insert all bucket items into array
                len1 = currBucket.length;
                for (idx3 = 0;idx3 < len1;idx3++) {
                    animations.push(new Animation(AnimationType.SliderSelection, idx1, idx1))
                    animations.push(new Animation(new CopyAnimation(currBucket[idx3]), idx1))
                    array[idx1++] = currBucket[idx3];
                }
            }
        }
        buckets = {};
    }
    
    return animations.concat(...getSortedAnimations(array))
}