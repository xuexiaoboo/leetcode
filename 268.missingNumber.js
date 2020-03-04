/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    // 使用api
    // var temp = 0;
    // while(nums.includes(temp)) {
    //     temp++;
    // }
    // return temp;


    // 不使用api
    // 等差数列求和，因为少一个数字，所以项数+1
    var temp = 0;
    var length = nums.length;
    var sum = (length * (length + 1)) / 2;
    for (var i = 0; i < length; i++) {
        sum -= nums[i];
    }
    return sum;
};