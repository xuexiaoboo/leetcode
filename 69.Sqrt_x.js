/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    // 来，我们来实现下边这个，嘻嘻
    // return Math.floor(Math.sqrt(x));

    // 牛顿迭代
    var res = x;
    while (res * res > x) {
        var next = (res + x / res) / 2
        if (next === res) {
            return Math.floor(res)
        } else {
            res = next
        }
    }
    return Math.floor(res)

    // 二分
};