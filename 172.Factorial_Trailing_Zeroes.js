/**
 * @param {number} n
 * @return {number}
 */

//  阶乘尾数0的个数
var trailingZeroes = function(n) {
    var count = 0;
    while (n >= 5) {
        count += Math.floor(n / 5);
        n /= 5;
    }
    return count;
};