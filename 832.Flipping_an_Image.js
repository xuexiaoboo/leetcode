/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
  // 双指针

  let len = A.length;
  for(let i = 0; i < len; i++) {
      let left = 0, right = len - 1;
      while(left < right) {
          if(A[i][left] === A[i][right]) {
              // 相等则直接进行异或取反
              A[i][left] ^= 1;
              A[i][right] ^= 1;
          }
          left++;
          right--;
          // 不相等则不进行处理，因为交换后再反转与交换前一样
      }
      if(left === right) {
          A[i][left] ^= 1;
      }
  }
  return A;
};