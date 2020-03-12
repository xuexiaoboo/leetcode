/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    // 学习到gcd(欧几里得算法)
    // gcd(a, b) = gcd(b, a % b)
    var gcd = (a, b) => {
        return b === 0 ? a : gcd(b, a % b)
    }

    if (str1 + str2 !== str2 + str1) {
        return ''
    }
    // 最大公因子长度
    var len = gcd(str1.length, str2.length)
    return str1.substring(0, len)
};