/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    //暴力
    if (n < 1) {
        return false;
    }
    while (n % 3 === 0 && n > 1) {
        n /= 3;
    }
    return (n === 1);
};