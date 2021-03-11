/**
 * @param {string} s
 * @return {number}
 */
 var calculate = function(s) {
  s = s.trim();
  const stack = [];
  let preSign = '+';
  let num = 0;
  const n = s.length;
  for (let i = 0; i < n; i++) {
      // 判断当前遍历到的字符是数字？
      if (!isNaN(Number(s[i])) && s[i] !== ' ') {
          // 通过字符串遍历判断的，进行累加，防止这个数是多位的数
          num = num * 10 + s[i].charCodeAt() - '0'.charCodeAt();
      }
      // 遍历到了符号，或遍历到表达式末尾？
      if (isNaN(Number(s[i])) || i === n - 1) {
          switch (preSign) {
              case '+':
                  stack.push(num);
                  break;
              case '-':
                  stack.push(-num);
                  break;
              case '*':
                  stack.push(stack.pop() * num);
                  break;
              default:
                  stack.push(stack.pop() / num | 0);
          }   
          preSign = s[i];
          num = 0;
      }
  }
  let ans = 0;
  while (stack.length) {
      ans += stack.pop();
  }
  return ans;
};