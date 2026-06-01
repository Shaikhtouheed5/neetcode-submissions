class Solution {
    public int removeDuplicates(int[] nums) {
        // Brute use a set and iterate over set and since set stores it elements in asecending order
        // the array is sorted

        // Optimal approach is to use two pointer. 

        int i = 0;
        for (int j = 1; j < nums.length; j++) {
            if (nums[i] < nums[j]) {
                nums[i+1] = nums[j];
                i++;
            }
        }
        return i + 1;
    }
}