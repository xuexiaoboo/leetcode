/**
 * @param {number[]} nums
 * @return {number}
 */
var findMagicIndex = function(nums) {
    // 暴力遍历
    // const len = nums.length
    // for(let i = 0; i < len; i++) {
    //     if(nums[i] === i) {
    //         return i
    //     }
    // }
    // return -1

    // 二分
    return getRes(nums, 0, nums.length-1)
};
var getRes = function (nums, left, right) {
    // 递归结束条件
    if(left > right) {
        return -1
    }

    // 中位索引
    var mid = parseInt((right - left) / 2 + left)
    var leftRes = getRes(nums, left, mid-1)

    // 判断中位左侧是否有满足值
    if(leftRes !== -1) {
        return leftRes
    } else if(nums[mid] === mid) {
        return mid
    }

    // 左侧不满足递归右侧
    return getRes(nums, mid+1, right)
}
