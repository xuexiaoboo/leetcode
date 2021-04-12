/**
 * @param {number[]} nums
 * @return {string}
 */
 var largestNumber = function(nums) {
  nums.sort((a, b) => {
      // let str1 = '' + a;
      // let str2 = '' + b;
      // return str1 > str2 ? -1 : 1
      // 这种情况是不够的，当出现a，b位数不同但是前面全相同的时候，位数多的就一定比位数小的大，从给的实例来测试是错的
      // 例如出现 30 > 3的情况，结果就是303 而非330，
      // 所以最好的方式是，把两者分别前后拼接，然后再转换为数字比较大小即可
      // 例如 303 < 330 所以30 3 两者要交换

      let str1 = '' + a + b;
      let str2 = '' + b + a;
      return +str1 > +str2 ? -1 : 1 // 直接转换为数字比较
  })
  if (nums[0] == 0) return '0'; // 如果第一项为0，说明最大的就是0，则返回0
  return nums.join('');
};