/*
 * @lc app=leetcode id=74 lang=typescript
 *
 * [74] Search a 2D Matrix
 */

// @lc code=start
function searchMatrix(matrix: number[][], target: number): boolean {
    let leftIndex: number = 0;
    let rightIndex: number = matrix.length * matrix[0].length - 1;
    while (true) {
        let centerIndex: number = Math.floor((leftIndex + rightIndex) / 2);
        let value: number =
            matrix[Math.floor(centerIndex / matrix[0].length)][centerIndex % matrix[0].length];
        if (value === target) {
            return true;
        } else {
            if (leftIndex === rightIndex || rightIndex < leftIndex)
                break;
            if (value > target) {
                rightIndex = centerIndex - 1;
                if (rightIndex < 0)
                    break;
            } else {
                leftIndex = centerIndex + 1;
                if (leftIndex > matrix.length * matrix[0].length - 1)
                    break;
            }
        }
    }
    return false;
};
// @lc code=end

