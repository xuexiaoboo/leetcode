/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var len = prices.length
        // 边界：没有这只股票
    if (len === 0) {
        return 0
    }
    // dp[i]为第i天获取利润
    var dp = new Array(len).fill(-Infinity)
    dp[0] = 0
    buy = prices[0]
    for (var i = 1; i <= len; i++) {
        dp[i] = Math.max(dp[i - 1], prices[i] - buy)
        buy = Math.min(prices[i], buy)
    }
    return dp[len - 1]
};