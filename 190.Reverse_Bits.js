/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
// 获取n的最后一位放入res，n右移，res左移

var reverseBits = function(n) {
    var res = 0;
    var count = 0;
    while (count++ < 32) {
        res <<= 1;
        res |= (n & 1);
        n >>= 1;
    }
    return res >>> 0; //js中位操作均为有符号数， >>>0 可以将有符号数变为无符号数，<<0将无符号变为有符号
};