/**
 * @param {number} n - a positive integer
 * @return {number}
 */

//  n的二进制数中1的个数
var hammingWeight = function(n) {
    // 暴力循环
    // var bits = 0;
    // var mask = 1;
    // for (var i = 0; i < 32; i++) {
    //     if ((n & mask) !== 0) {
    //         bits++;
    //     }
    //     mask <<= 1;
    // }
    // return bits;



    // 优化：处理末位1，有几个1处理几次
    var bits = 0;
    while (n !== 0) {
        bits++;
        n = (n & n - 1);
    }
    return bits;
};