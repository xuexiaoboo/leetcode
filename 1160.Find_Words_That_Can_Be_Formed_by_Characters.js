/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    var map = new Map()
    var len = 0 //记录掌握单词长度

    for (var c of chars) {
        map.set(c, map.has(c) ? map.get(c) + 1 : 1)
    }

    for (var w of words) {
        if (check(w, new Map(map))) {
            len += w.length
        }
    }
    return len
};

var check = function(w, map) {
    for (var i of w) {
        if (map.has(i) && map.get(i) > 0) {
            map.set(i, map.get(i) - 1)
        } else {
            return false
        }
    }
    return true
}