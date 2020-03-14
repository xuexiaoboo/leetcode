/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    var len = nums.length
    max = 1
    if (len === 0) return 0
    if (len === 1) return 1

    var dp = new Array(len).fill(1)

    for (var i = 1; i < len; i++) {
        max = 1
        for (var j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                // max = Math.max(dp[j]+1, max)
                max = Math.max(dp[j] + 1, max)
            }
        }
        dp[i] = max
    }
    return Math.max(...dp)
};