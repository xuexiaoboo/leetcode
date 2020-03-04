/**
 * @param {number[]} nums
 * @return {number}
 */
// 判断众数


var majorityElement = function(nums) {
    // 排序
    // nums.sort(); 
    // return nums[Math.floor(nums.length/2)];


    // 摩尔投票算法
    var count = 0;
    var cat = null;

    for (var num of nums) {
        if (count === 0) {
            cat = num;
        }
        count += cat === num ? 1 : -1;
    }
    return cat;
};