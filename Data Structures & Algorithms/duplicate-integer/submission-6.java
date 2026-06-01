class Solution {
    public boolean hasDuplicate(int[] nums) {
        // Brute Force:
        // Arrays.sort(nums);

        // System.out.println(Arrays.toString(nums));

        // for (int i = 0; i < nums.length - 1; i++) {
        //     if (nums[i] == nums[i+1]) {
        //         return true;
        //     }
        // }

        // return false;
        Set<Integer> duplicates = new HashSet<>();

        for(int element: nums) {
            duplicates.add(element);
        }

        return !(duplicates.size() == nums.length);
    }
}
