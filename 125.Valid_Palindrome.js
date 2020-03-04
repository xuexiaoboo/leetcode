/**
 * @param {string} s
 * @return {boolean}
 */
// 验证回文串

var isPalindrome = function(s) {
    // 双指针
    var s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    var left = 0;
    var right = s.length - 1;
    while (left < right) {
        if (s[left] !== s[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
};