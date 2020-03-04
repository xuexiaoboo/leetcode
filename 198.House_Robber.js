/**
 * @param {number[]} nums
 * @return {number}
 */

//  动态规划
var rob = function(nums) {
    if (nums.length == 0) {
        return 0;
    }
    if (nums.length == 1) {
        return nums[0]
    }

    var dp = [0, nums[0]];
    // dp[i] = Math.max(dp[i-1], dp[i-2]+nums[i])
    // for中的i为偷到第i家
    // dp[i]为偷到第i家可偷到最大值
    for (var i = 2; i <= nums.length; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i - 1])
    }
    return dp[dp.length - 1];
};