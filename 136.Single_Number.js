/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    // 暴力循环
    // for(var i = 0; i < nums.length; i++) {
    //     var one = nums.indexOf(nums[i]);
    //     var two = nums.lastIndexOf(nums[i])
    //     if(one === two) {
    //         return nums[i]
    //     }
    // }


    // 异或，一组异或满足交换律和结合律
    var single = 0;
    for (var i = 0; i < nums.length; i++) {
        single ^= nums[i];
    }
    return single;
};