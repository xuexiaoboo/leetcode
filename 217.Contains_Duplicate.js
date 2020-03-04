/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // api
    // if(nums.length === 0 || nums.length === 1) {
    //     return false;
    // }
    // for(var i = 0; i < nums.length; i++) {
    //     if(nums.indexOf(nums[i]) !== nums.lastIndexOf(nums[i])) {
    //         return true;
    //     }
    // }
    // return false;

    // 哈希
    var map = new Map();
    for (var i = 0; i < nums.length; i++) {
        if (map.get(nums[i]) !== undefined) { //也可用map.has();
            return true;
        }
        map.set(nums[i], i);
    }
    return false;
};