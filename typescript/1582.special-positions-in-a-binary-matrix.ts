/*
 * @lc app=leetcode id=1582 lang=typescript
 *
 * [1582] Special Positions in a Binary Matrix
 */

// @lc code=start
function numSpecial(mat: number[][]): number {
    let result: number = 0;
    let oneArray: Array<{
        position: { x: number, y: number },
        isSpecialPosition: boolean
    }> = new Array<{ position: { x: number, y: number }, isSpecialPosition: boolean }>();
    for (let rowIndex: number = 0; rowIndex < mat.length; rowIndex++) {
        for (let columnIndex: number = 0; columnIndex < mat[rowIndex].length; columnIndex++) {
            if (mat[rowIndex][columnIndex] === 1) {
                oneArray.push({ position: { x: rowIndex, y: columnIndex }, isSpecialPosition: true });
            }
        }
    }
    for (let i: number = 0; i < oneArray.length; i++) {
        for (let j: number = i + 1; j < oneArray.length; j++) {
            if (oneArray[j].position.x === oneArray[i].position.x ||
                oneArray[j].position.y === oneArray[i].position.y) {
                oneArray[i].isSpecialPosition = false;
                oneArray[j].isSpecialPosition = false;
            }
        }
    }
    result = oneArray.filter(item => item.isSpecialPosition === true).length;
    return result;
};
// @lc code=end

