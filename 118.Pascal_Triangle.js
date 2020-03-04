/**
 * @param {number} numRows
 * @return {number[][]}
 */
//杨辉三角 

var generate = function(numRows) {
    var result = [];
    if (numRows <= 0) {
        return result;
    }
    for (var i = 0; i < numRows; i++) { //第i行
        var inArry = [];
        for (var j = 0; j <= i; j++) { //第i行有j个数
            if (j > 0 && j < i) {
                inArry.push(result[i - 1][j - 1] + result[i - 1][j]);
            } else {
                inArry.push(1);
            }
        }
        result.push(inArry);
    }
    return result;
};