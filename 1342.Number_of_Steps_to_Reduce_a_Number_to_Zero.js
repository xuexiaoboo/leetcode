/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    var count = 0;
    while (num != 0) {
        // 可以使用三目运算符进行整合
        if (num % 2 == 0) {
            num /= 2;
        } else {
            num -= 1;
        }
        count++
    }
    return count;
};