/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
  // 一个 m * n 的矩阵转置后未 n * m 的矩阵

  const yLen = matrix.length, xLen = matrix[0].length;
  let newMatrix = new Array(xLen).fill(0).map(() => new Array(yLen).fill(0));

  for(let i = 0; i < yLen; i++) {
      for(let j = 0; j < xLen; j++) {
          newMatrix[j][i] = matrix[i][j];
      }
  }
  return newMatrix;
};