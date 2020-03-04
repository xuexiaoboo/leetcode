/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    // 动态规划
    // 到达第n阶的前一步可能在第n-1阶或n-2阶，则dp(n)=dp(n-1)+dp(n-2)
    if (n === 1) {
        return 1;
    }
    var dp = [0];
    dp[1] = 1;
    dp[2] = 2;
    for (var i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[n];


    // 其实也可以理解是求斐波那契数列第n项
};