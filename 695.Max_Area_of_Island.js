/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    // DFS
    var row = grid.length
    var col = grid[0].length
    var max = 0

    for (var i = 0; i < row; i++) {
        for (var j = 0; j < col; j++) {
            if (grid[i][j] === 1) {
                max = Math.max(max, dfs(grid, i, j, row, col))
            }
        }
    }

    return max
};

function dfs(grid, i, j, row, col) {
    // 边界判断
    if (i < 0 || i >= row || j < 0 || j >= col || grid[i][j] === 0) {
        return 0
    }
    var count = 1
        // 为了不重复遍历，使遍历过的元素为0
    grid[i][j] = 0

    // 递归进行元素四周的遍历
    count += dfs(grid, i + 1, j, row, col)
    count += dfs(grid, i - 1, j, row, col)
    count += dfs(grid, i, j + 1, row, col)
    count += dfs(grid, i, j - 1, row, col)

    return count
}