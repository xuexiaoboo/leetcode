/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
  // 暴力双循环遍历
  // let res = []
  // for(let i = 0; i < nums.length; i++) {
  //     for(let j = i+1; j < nums.length; j++) {
  //         if(nums[i] + nums[j] === target) {
  //             res = [i, j]
  //             return res
  //         }
  //     }
  // }

  // map
  let map = new Map()
  for(let i = 0; i < nums.length; i++) {
      let addend = nums[i]
      if(map.get(target - addend) !== undefined) {
          return [map.get(target - addend), i]
      }
      map.set(nums[i], i)
  }
};