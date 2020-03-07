var MaxQueue = function() {
    this.arr = []
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function() {
    if (this.arr.length === 0) {
        return -1
    }
    return Math.max(...this.arr)
};

/** 
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function(value) {
    this.arr.push(value)
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function() {
    if (this.arr.length === 0) {
        return -1
    }
    return this.arr.shift()
};

/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */