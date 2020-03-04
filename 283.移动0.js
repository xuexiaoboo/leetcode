/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    // 使用api
    // var temp = 0;
    // for(var i = 0; i < nums.length; i++) {
    //     if(nums[temp] === 0) {
    //         nums.splice(temp, 1)  //非0为删除
    //         nums[nums.length] = 0;
    //     }
    //     else {
    //         temp++;
    //     }
    // }
    // return nums;

    // 不使用api
    var notZero = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i]) {
            nums[notZero++] = nums[i];
        }
    }
    for (var j = notZero; j < nums.length; j++) {
        nums[j] = 0;
    }
};