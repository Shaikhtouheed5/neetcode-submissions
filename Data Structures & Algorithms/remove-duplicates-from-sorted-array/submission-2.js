class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let uniqueCount = 0;
        let uniquePosition = 0;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] !== nums[uniquePosition]) {
                uniqueCount++;
                if (uniquePosition+1 < i) {
                    nums[uniquePosition + 1] = nums[i];
                }
                uniquePosition++;
                continue;
            }
        }

        nums.length = uniquePosition + 1;
        return ++uniqueCount;
    }
}
