/**
 * @param {string} S
 * @return {string}
 */
 var removeDuplicates = function(S) {
  // 便利字符串，利用栈存储未消掉元素，若字符串当前元素与栈顶元素相同，则将栈顶元素删除。

  let stack = [];
  for(let value of S) {
      if(value === stack[stack.length - 1]) {
          stack.pop();
      } else {
          stack.push(value);
      }
  }
  return stack.join('');
};