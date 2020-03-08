/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    // 从结尾考虑：若最后一张选1，则dp[10]+1
    //            若最后一张选2，则dp[9]+1
    //            若最后一张选5，则dp[6]+1
    // 即 dp[i] = dp[i - coin] + 1

    // 创建amount+1空间数组，并全部填充Infinity
    // dp[i]为当前凑i元需要的最少的硬币
    var dp = new Array(amount + 1).fill(Infinity)
    dp[0] = 0
        // i为当前， 当前， 当前要凑的总金额
    for (var i = 1; i <= amount; i++) {
        for (var coin of coins) {
            if (i - coin >= 0) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1)
            }
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount]
};