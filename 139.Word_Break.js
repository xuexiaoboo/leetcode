/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    // 动态规划，，dp[i]表示前s中前i个字符能否正常拆分单词
    var dp = new Array(s.length+1).fill(false)
    dp[0] = true
    length = s.length
    for(var i = 1; i <= length; i++) {
        for(var j = 0; j < i; j++) {
            if(dp[j] && wordDict.indexOf(s.substring(j, i)) !== -1) {
                dp[i] = true
                break
            }
        }
    }
    return dp[length]
};