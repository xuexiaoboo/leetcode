/**
 * @param {string} S
 * @return {string}
 */
var compressString = function(S) {
    var sArr = S.split('') //将字符串分割成字符串数组
    var len = sArr.length
    var ans = '' //压缩后的字符串

    // i为当前压缩串的头部索引， j为移动索引
    for (var i = 0, j = 0; j < len; j++) {
        //使用j+1判断而不使用j是为了解决S最后一个元素的判断问题
        if (sArr[j + 1] !== sArr[i]) {
            ans += sArr[i] + (j - i + 1)
            i = j + 1
        }
    }
    return len > ans.length ? ans : S
};