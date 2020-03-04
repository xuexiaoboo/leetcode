/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
    // 要想让一个数列不满足true，最少必须在三个数中出现这错误情况，
    // 所以将判断区间放到3个元素

    var count = 0
    var len = nums.length

    for (var i = 1; i < len; i++) {
        if (nums[i - 1] > nums[i]) {
            if (i - 2 >= 0 && nums[i - 2] > nums[i]) {
                nums[i] = nums[i - 1]
                count++
            } else {
                nums[i - 1] = nums[i]
                count++
            }
        }
    }
    return count > 1 ? false : true
};