class MyStack {
    constructor() {}

    #list = [];

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        this.#list.push(x);
    }

    /**
     * @return {number}
     */
    pop() {
        return this.#list.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.#list.at(-1);
    }

    /**
     * @return {boolean}
     */
    empty() {
        return !this.#list.length;
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
