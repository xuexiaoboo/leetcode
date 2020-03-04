/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    // 直接循环加
    var len = digits.length - 1;
    for (var i = len; i >= 0; i--) {
        digits[i]++;
        if (digits[i] < 10) {
            return digits;
        } else {
            digits[i] = 0;
        }
        if (i === 0) {
            digits.unshift(1);
        }
    }
    return digits;
};