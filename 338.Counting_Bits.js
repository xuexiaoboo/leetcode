/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
  // 通过 x = x & (x - 1) 将数的二进制最后一位变为0，直到数为0，进行操作的次数则为1的个数
  let resArr = new Array(num + 1).fill(0);
  for(let i = 0; i <= num; i++) {
      resArr[i] = getBitCount(i);
  }
  return resArr;
};

function getBitCount (bit) {
  var count = 0;
  while (bit > 0) {
      bit &= bit - 1;
      count++;
  }
  return count;
}