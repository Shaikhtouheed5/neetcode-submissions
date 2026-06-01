class Solution {
    cache = {
        1: 1,
        2: 2,
        3: 3,
    };
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        if (this.cache[n]) {
            return this.cache[n]
        }

        if (n < 1) {
            return 0
        };

        let value = this.climbStairs(n - 1) + this.climbStairs(n - 2);

        /** 4
         * 1 1 1 1
         * 1 1 2 0
         * 1 2 1 0
         * 2 1 1 0
         * 2 2 0 0
         */

        /** 5
         * 1 1 1 1 1
         * 2 1 1 1 0
         * 1 2 1 1 0
         * 1 1 2 1 0
         * 1 1 1 2 0
         * 1 2 2 0 0
         * 2 1 2 0 0
         * 2 2 1 0 0
         */

        /** 6
         * 1 1 1 1 1 1
         * 1 1 1 1 2 0
         * 1 1 1 2 1 0
         * 1 1 2 1 1 0
         * 1 2 1 1 1 0
         * 2 1 1 1 1 0
         * 1 1 2 2 0 0
         * 1 2 1 2 0 0
         * 2 1 1 2 0 0
         * 2 1 2 1 0 0
         * 2 2 1 1 0 0
         * 2 2 2 0 0 0
         */

        this.cache[n] = value;

        return value;
    }
}
