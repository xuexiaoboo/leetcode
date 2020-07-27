/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    // 双指针
    var sPoint = 0
    var tPoint = 0
    var sLen = s.length
    var tLen = t.length
    while (sPoint < sLen && tPoint < tLen) {
        if (s[sPoint] === t[tPoint]) {
            sPoint++
            tPoint++
        } else {
            tPoint++
        }
    }
    return sPoint === sLen
};
