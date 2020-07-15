/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    let dp = new Array(n+1).fill(0);
    // 对应空数组和只有一个数字的数组
    dp[0] = 1;
    dp[1] = 1;
    for(let i = 2; i <= n; i++){
      for(let j = 1; j <= i; j++){
        // 左子树从n-1~0，，，右子树从0~n-1；
        dp[i] += dp[i-j] * dp[j-1];
      }
    }
    return dp[n];
  };