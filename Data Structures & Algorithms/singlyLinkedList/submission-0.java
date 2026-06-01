public class ListNode {
    int val;
    ListNode next;

    public ListNode(int val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    ListNode head;
    ListNode tail;

    public LinkedList() {
        head = null;
        tail = null;
    }

    public int get(int index) {
        ListNode curr = head;
        int i = 0;
        while (curr != null) {
            if (i == index) return curr.val;
                curr = curr.next;
                i++;
            }
        return -1;
    }

    public void insertHead(int val) {
        ListNode node = new ListNode(val);
        if (head == null) { // empty list
            head = tail = node;
        } else {
            node.next = head;
            head = node;
        }
    }

    public void insertTail(int val) {;
        ListNode node = new ListNode(val);
        if (tail == null) { // empty list
            head = tail = node;
        } else {
            tail.next = node;
            tail = node;
        }
    }

    public boolean remove(int index) {
        if (head == null) return false;
    
        if (index == 0) {
            head = head.next;
            if (head == null) tail = null; // list is now empty
            return true;
        }

        ListNode curr = head;
        for (int i = 0; i < index - 1 && curr != null; i++) {
            curr = curr.next;
        }

        if (curr == null || curr.next == null) return false;

        if (curr.next == tail) tail = curr;
        curr.next = curr.next.next;
        return true;
    }

    public ArrayList<Integer> getValues() {
        ArrayList<Integer> values = new ArrayList<Integer>();

        ListNode curr = head;
        while (curr != null) {
            values.add(curr.val);
            curr = curr.next;
        }

        return values;
    }
}
