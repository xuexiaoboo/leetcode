/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function(candies, num_people) {
    // 循环分配糖果

    // 分配数组空间
    var arr = new Array(num_people).fill(0)
    var num = 0
        // 糖果够当前小朋友
    while (candies > num) {
        // 使用%实现循环
        arr[(num % num_people)] += ++num
        candies -= num
    }
    // 糖果不够当前小朋友了,剩余糖果都给他
    arr[(num % num_people)] += candies

    return arr
};