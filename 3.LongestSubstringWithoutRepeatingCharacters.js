/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
  // 队列
  // var res = 0,
  //     i = 0;
  // var temp = [];
  // while(i < s.length) {
  //     if(temp.indexOf(s[i]) === -1) {
  //         temp.push(s[i]);
  //     } else {
  //         temp.shift();
  //         continue;
  //     }
  //     res = Math.max(res, temp.length);
  //     i++;
  // }
  // return res;

  // 滑动窗口
  const occ = new Set()
  let right = 0, ans = 0
  const len = s.length
  for (let i = 0; i < len; i++) {
    while (right < len && !occ.has(s.charAt(right))) {
        occ.add(s.charAt(right))
        right++
      }
      occ.delete(s.charAt(i))
      ans = Math.max(ans, right - i)
  }
  return ans
};