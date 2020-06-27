/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    var res = 1
    while(nums.indexOf(res) !== -1) {
        res++
    }
    return res
};