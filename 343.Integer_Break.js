/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    let dp = new Array(n+1).fill(0)
    dp[2] = 1
    for (let i = 3; i <= n; i++) {
        for (let j = 1; j < i; j++) {  // j为被分出的第一个数
            dp[i] = Math.max(dp[i], Math.max(dp[i - j], i - j) * j)
        }
    }
    return dp[n]
};
