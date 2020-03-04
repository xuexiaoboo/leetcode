/**
 * @param {number[]} guess
 * @param {number[]} answer
 * @return {number}
 */
var game = function(guess, answer) {
    // 对数组进行遍历
    // var count = 0;
    // for(var i = 0; i < guess.length; i++) {
    //     if(guess[i] == answer[i]) {
    //         count++;
    //     }
    // }
    // return count;

    // 使用过滤filter方法
    return guess.filter((key, index) => {
        return key == answer[index];
    }).length;
};