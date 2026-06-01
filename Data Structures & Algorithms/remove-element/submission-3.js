class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let uniquePosition = 0;

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] !== val) {
                nums[uniquePosition] = nums[i];
                uniquePosition++;
            }
        }

        nums.length = uniquePosition;
        return uniquePosition;
        }
}
