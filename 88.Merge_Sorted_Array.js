/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    // 直击灵魂(合并后排序)

    //双指针从后往前
    var nums1_len = nums1.length - 1;
    m--;
    n--;
    for (var i = nums1_len; n >= 0; i--) {
        if (nums1[m] > nums2[n]) {
            nums1[i] = nums1[m];
            m--;
        } else {
            nums1[i] = nums2[n];
            n--;
        }
    }
};