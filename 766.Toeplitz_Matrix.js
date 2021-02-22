/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
  // 矩阵中  每行去掉末尾项 === 下一行去掉首项

  let lenY = matrix.length;
  for(let i = 0; i < lenY - 1; i++) {
      // 当前行去尾
      let currentLine = matrix[i].slice(0, matrix[i].length-1).toString();
      // 下一行掐头
      let nextLine = matrix[i+1].slice(1).toString();
      if(currentLine !== nextLine) {
          return false;
      }
  }
  return true;
};