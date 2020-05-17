/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    // 汉明距离，相同位数二进制数据不同的位数
    // 异或，相同位为0，不同位为1
    var xor = x ^ y;
    var count = 0;
    // 进行移位判断1的个数
    while (xor) {
        if (xor & 1) {
            count++
        }
        xor = xor >> 1
    }
    return count

    // 可将xor转换为二进制字符串进行1的个数的判断
    // xor.toString(2)
};