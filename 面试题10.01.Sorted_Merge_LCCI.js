/**
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify A in-place instead.
 */
var merge = function(A, m, B, n) {
    if (m === 0 && n !== 0) {
        A.splice(0, B.length, ...B.slice(0, B.length))
        return A
    }
    if (m !== 0 && n === 0) {
        return A
    }
    let len1 = m - 1;
    let len2 = n - 1;
    let count = m + n - 1;

    // B先结束
    while (len1 >= 0 && len2 >= 0) {
        A[count--] = A[len1] > B[len2] ? A[len1--] : B[len2--];
    }

    // A先结束B有剩余
    A.splice(0, len2 + 1, ...B.slice(0, 0 + len2 + 1))
    return A
};