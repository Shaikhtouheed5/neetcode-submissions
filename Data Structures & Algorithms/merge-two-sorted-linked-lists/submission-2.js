/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        if (list1 === null || list1 === undefined) {
            return list2;
        }

        if (list2 === null || list2 === undefined) {
            return list1;
        }

        let a = list1;
        let b = list2;

        let lastA;

        while (a || b) {
            if (b === null) break;
            if (a === null && b == null) break;

            if (a === null && b !== null) {
                lastA.next = b;
                b = b.next;
                lastA = lastA.next;
                continue;
            }

            if (b.val < a.val) {
                let currentB = b;
                b = b.next;

                currentB.next = a;
                if (a === list1) {
                    list1 = currentB
                }

                if (!lastA) {
                    lastA = a;
                } else {
                lastA.next = currentB;
            }
                a = currentB;
                continue;
            }

            if (b.val > a.val) {
                lastA = a;
                a = a.next;
                continue
            }

            let currentB = b;
            b = b.next;

            currentB.next = a.next;
            a.next = currentB;
        }

        return list1;
    }
}
