/**
 * @param {number[]} A
 * @return {boolean}
 */
var canThreePartsEqualSum = function(A) {
    var sum = A.reduce((a, b) => a + b) // A数组求和
    var len = A.length
    if (sum % 3 !== 0) {
        return false
    }
    target = sum / 3
    temp = 0
    count = 0
    for (var i = 0; i < len; i++) {
        temp += A[i]
        if (temp === target) {
            temp = 0
            count++
        }
    }
    return (sum === 0 && count >= 3) || (sum !== 0 && count === 3)
};