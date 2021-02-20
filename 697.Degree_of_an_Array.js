/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
  // 根据出现的次数判断众数，并记录出现的左右边界索引判断最小长度

  let map = {};
  let maxNum = 0, minLen = 0;

  for(let [index, value] of nums.entries()) {
      if(!map[value]) {
          map[value] = [1, index, index];
      } else {
          map[value][0]++;
          map[value][2] = index;
      }
  }

  for(let [count, left, right] of Object.values(map)) {
      if(maxNum < count) {
          maxNum = count;
          minLen = right - left + 1;
      } else if(maxNum === count) {
          if(minLen > (right - left + 1)) {
              minLen = right - left + 1;
          }
      }
  }
  return minLen;
};