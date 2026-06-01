public class ListNode {
    int val;
    ListNode next;

    public ListNode(int val) {
        this.val = val;
        this.next = null;
    }
}


class LinkedList {
    // Initialize head and tail
    ListNode head;
    ListNode tail;

    public LinkedList() {
        // Initialize an empty linked list 
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
        // To insert head 
        ListNode nodeToInsert = new ListNode(val); // creates a node
        
        // check if the linkedList is empty
        if (head == null) {
            head = nodeToInsert;
            tail = head;
        } else {
            // if the linkedList is not empty. 
            // means you need to move head to nodeToInsert
            nodeToInsert.next = head;
            head = nodeToInsert;
        }
    }

    public void insertTail(int val) {
        // to insert tail
        ListNode nodeToInsert = new ListNode(val);

        // check if the list is empty
        if (tail == null) {
            head = nodeToInsert;
            tail = head;
        } else {
            tail.next = nodeToInsert;
            tail = nodeToInsert;
        }
    }

    public boolean remove(int index) {
        if (head == null)  return false;

        if (index == 0) {
            head = head.next;

            if (head == null) tail = null;
            return true;
        }

        ListNode curr = head;

        for (int i = 0; i < index -1; i++) {
            curr = curr.next;
        }

        if (curr == null || curr.next == null) return false;
        if (curr.next == tail) tail = curr;

        curr.next = curr.next.next;
        return true;
    }

    public ArrayList<Integer> getValues() {
        ArrayList<Integer> values = new ArrayList<>();
        ListNode curr = head;
        while (curr != null) {
            values.add(curr.val);
            curr = curr.next;
        }
        return values;
    }
}
