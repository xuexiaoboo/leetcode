/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isBoomerang = function(points) {
    // 根据斜率进行判断
    // ab线段斜率
    // var k1 = (points[1][0]-points[0][0]) / (points[1][1]-points[0][1])
    // ac线段斜率
    // var k2 = (points[2][0]-points[0][0]) / (points[2][1]-points[0][1])
    // 若斜率相等则在同一直线上
    // return k1 === k2 ? false : true

    // 为避免出现分母为零的情况，可使用于判断的等式交叉相乘
    var res1 = (points[1][0] - points[0][0]) * (points[2][1] - points[0][1])
    var res2 = (points[1][1] - points[0][1]) * (points[2][0] - points[0][0])
    return res1 === res2 ? false : true
};