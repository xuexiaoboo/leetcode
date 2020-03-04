/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    var res = 0;
    var num = 0;
    // 相当于26进制
    for (var i = 0; i < s.length; i++) {
        // res += (s.charCodeAt(i)-64)*(Math.pow(26, s.length-1-i))
        num = s.charCodeAt(i) - 64;
        res = res * 26 + num;
    }
    return res;
};