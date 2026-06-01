class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    baseSolution(nums) {
        const newArray = new Array(nums.length * 2);

        for(let index = 0; index < nums.length; index++) {
            newArray[index] = nums[index];
            newArray[nums.length + index] = nums[index];
        }

        return newArray;
    }
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    spaceOptimisedSolution(nums) {
        const originalLength = nums.length;
        nums.length = originalLength * 2;

        for(let index = 0; index < originalLength; index++) {
            nums[originalLength + index] = nums[index];
        }

        return nums;
    }
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    usingDefaultDynamicBehaviourOfArray(nums) {
        const originalLength = nums.length;

        for(let index = 0; index < originalLength; index++) {
            nums.push(nums[index]);
        }

        return nums;
    }
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        // return this.baseSolution(nums);
        // return this.spaceOptimisedSolution(nums);
        return this.usingDefaultDynamicBehaviourOfArray(nums);
    }
}
