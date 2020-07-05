/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    /**
     * 1.从小到大排序
     * 2.固定第一个数，第二个数与第二个数使用双指针进行夹逼 
     */

    // 从小到大排序
    nums = nums.sort((a, b) => a - b)
    let result = []
    var len = nums.length-2
    for (let i = 0; i < len; i++) {
        if (nums[i] > 0) { // 最小数字如果大于0，则后面不会有和为0的组
            break;
        }

        if (nums[i] === nums[i - 1]) {
            continue; // 跳过相同的数字
        }
        // 其中，nums[i]是最小的数字，nums[k]是最大的数字
        let l = i + 1
        let r = nums.length - 1

        // 第二个数的索引不能超过第三个数的索引
        while (l < r) {
            let sum = nums[i] + nums[l] + nums[r]
            if (sum > 0) {
                // 如果结果大于0，那么最大的数字索引减一，寻找更小的数字
                do {r--} while (nums[r] === nums[r + 1]) // 跳过相同的数字
            } else {
                // 如果结果等于0，加入数组
                if (!sum) result.push([nums[i], nums[l], nums[r]])
                // 如果结果不大于0，那么次大的数字索引加一，寻找更大的数字
                do {l++} while (nums[l] === nums[l - 1]) // 跳过相同的数字
            }
        }
    }
    return result
};