/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var max = -1 << 31;
    var sumVal = 0;
    for (var item of nums) {
        sumVal += item;
        // max = Math.max(sumVal, max);
        // sumVal = Math.max(0,sumVal);

        // 使用内置的Math发放会更加费时
        max = sumVal > max ? sumVal : max;
        sumVal = sumVal > 0 ? sumVal : 0;
    }
    return max;
};