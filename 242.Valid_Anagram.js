/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// 判断字母异位词
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    var map = new Map();
    for (var i = 0; i < s.length; i++) {
        map.get(s[i]) === undefined ? map.set(s[i], 1) : map.set(s[i], map.get(s[i]) + 1);
    }
    for (var j = 0; j < t.length; j++) {
        if (map.get(t[j]) > 0) {
            map.set(t[j], map.get(t[j]) - 1);
        } else {
            return false;
        }
    }
    return true;
};