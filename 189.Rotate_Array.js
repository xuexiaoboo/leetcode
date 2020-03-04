/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    // api
    for (var i = 0; i < k; i++) {
        var temp = nums.pop();
        nums.unshift(temp);
    }


    //vscode没问题，得琢磨？？？？
    // k值如果超过数组长度会按0算
    // nums = [...nums.splice(-k), ...nums];
};