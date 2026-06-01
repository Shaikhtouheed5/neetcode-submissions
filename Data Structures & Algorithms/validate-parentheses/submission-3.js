class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const openingBrackets = ['(', '{', '['];
        const closingBrackets = [')', '}', ']'];

        let stack = [];
        for (let char of s) {
            if (openingBrackets.includes(char)) {
                stack.push(char);
                continue
            }

            const positionOfOpeningChar = openingBrackets.indexOf(stack.at(-1));
            const positionOfClosingChar = closingBrackets.indexOf(char);

            if (positionOfOpeningChar !== positionOfClosingChar) {
                return false;
            }

            stack.length -= 1;
        }

        return !stack.length;
    }
}
