/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.items = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.items.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    return this.items.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.items[this.items.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    // 可以在栈操作过程同时判断min，相对省时
    var min = this.items[0];
    for (var i = 1; i < this.items.length; i++) {
        // min < this.items[i]?min=min:min = this.items[i];
        if (min > this.items[i]) {
            min = this.items[i];
        }
    }
    return min;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */