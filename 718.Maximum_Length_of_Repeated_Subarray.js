/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function(A, B) {
    var [lenA, lenB] = [A.length, B.length]
    var res = 0
    var dp = []
    for(var i = 0; i <= lenA; i++) {
        dp[i] = (new Array(lenB+1)).fill(0)
        for(var j = 1; j <= lenB && i > 0; j++) {
            if(A[i-1] === B[j-1]) {
                dp[i][j] = dp[i-1][j-1] + 1
                res = Math.max(res, dp[i][j])
            }
        }
    }
    return res
};