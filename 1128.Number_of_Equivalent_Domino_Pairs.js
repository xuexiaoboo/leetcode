/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function(dominoes) {
  // 每一个元素的值  1 <= dominoes[i][j] <= 9  ，将每组元素之组成一个两位数，作为数组索引，在数组值中进行个数记录

  let countArr = new Array(100).fill(0);
  let res = 0;

  for(let domonoe of dominoes) {
    let indexNum = domonoe[0] <= domonoe[1] ? domonoe[0]*10+domonoe[1] : domonoe[1]*10+domonoe[0];
    res += countArr[indexNum];
    countArr[indexNum]++;
  }
  return res;
};