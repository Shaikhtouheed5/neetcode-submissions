class Solution {

    // public static int bruteForce(int[] nums, int val) {
    //     /**
    //     Brute Approach - Use a temp array, Iterate over it, and insert only if the 
    //     current element is not equal to val 
    //     */

    //     List<Integer> temp = new ArrayList<>();

    //     for (int num: nums) {
    //         if (num != val) {
    //             temp.add(num);
    //         }
    //     }

    //     for (int i = 0; i < temp.size(); i++) {
    //         nums[i] = temp.get(i);
    //     }

    //     return temp.size();
    // }

    public static int optimalSolution(int[] nums, int val) {
        int k = 0;

        for (int i = 0; i < nums.length; i++) {
            if (nums[i] != val) {
                nums[k] = nums[i];
                k++;
            }
        }

        return k;
    }

    public int removeElement(int[] nums, int val) {
        // return bruteForce(nums, val);
        return optimalSolution(nums, val);
    }
}