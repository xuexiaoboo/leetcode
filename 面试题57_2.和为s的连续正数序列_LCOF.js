/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function(target) {
    // 滑动窗口
    var l = 1
    var r = 1
    var sum = 0
    var ans = []
        // 因为至少含有两个数，所以最大的数必定不大于target的一半
    while (l <= Math.round(target / 2)) {
        if (sum < target) {
            sum += r
            r++
        } else if (sum > target) {
            sum -= l
            l++
        } else if (sum === target) {
            var temp = []
            for (var i = l; i < r; i++) {
                temp.push(i)
            }
            ans.push(temp)

            // 继续找第二个满足条件的序列
            sum -= l
            l++
        }
    }
    return ans
};