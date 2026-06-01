/**
 * Pair class to store key-value pairs
 */
// class Pair {
//     /**
//      * @param {number} key The key to be stored in the pair
//      * @param {string} value The value to be stored in the pair
//      */
//     constructor(key, value) {
//         this.key = key;
//         this.value = value;
//     }
// }
class Solution {
    /**
     * @param {Pair[]} pairs
     * @returns {Pair[][]}
     */
    insertionSort(pairs) {
        const responseArray = [];
        for(let i = 1; i <= pairs.length; i++) {
            responseArray.push([...pairs]);
            let j = i;
            while (j > 0 && (pairs[j]?.key ?? Infinity) < (pairs[j - 1]?.key ?? -Infinity)) {
                [pairs[j], pairs[j - 1]] = [pairs[j - 1], pairs[j]];
                j--;
            }
        }
        return responseArray;
    }
}
