class MinStack {
    List<Integer> dataStack;
    List<Integer> minStack;
    int size = 0;

    public MinStack() {
        this.dataStack = new ArrayList<>();
        this.minStack = new ArrayList<>();
    }
    
    public void push(int val) {
       dataStack.add(val);

        if (size == 0) {
            minStack.add(val);
        } else {
           minStack.add(Math.min(val, minStack.get(size - 1)));
        }
        
        size++;

    }
    
    public void pop() {
        dataStack.remove(size - 1);
        minStack.remove(size - 1);
        size--;
    }
    
    public int top() {
        return dataStack.get(size - 1);
    }
    
    public int getMin() {
        return minStack.get(size - 1);
    }
}
