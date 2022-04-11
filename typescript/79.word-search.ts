/*
 * @lc app=leetcode id=79 lang=typescript
 *
 * [79] Word Search
 */

// @lc code=start
function exist(board: string[][], word: string): boolean {
    const findNext = (position: Array<number>, wordIdx: number, usedPosition: Array<string>) => {
        let result: boolean = false;

        let leftPosition: Array<number> = [position[0], position[1] - 1];
        let upperPosition: Array<number> = [position[0] - 1, position[1]];
        let rightPosition: Array<number> = [position[0], position[1] + 1];
        let bottomPosition: Array<number> = [position[0] + 1, position[1]];

        if (leftPosition[1] >= 0 && !usedPosition.includes(leftPosition.join(',')) &&
            board[leftPosition[0]][leftPosition[1]] === word[wordIdx]) {
            if (wordIdx === word.length - 1) {
                return true;
            }
            result = findNext(leftPosition, wordIdx + 1, [...usedPosition, leftPosition.join(',')]);
            if (result)
                return result;
        }
        if (upperPosition[0] >= 0 && !usedPosition.includes(upperPosition.join(',')) &&
            board[upperPosition[0]][upperPosition[1]] === word[wordIdx]) {
            if (wordIdx === word.length - 1) {
                return true;
            }
            result = findNext(upperPosition, wordIdx + 1, [...usedPosition, upperPosition.join(',')]);
            if (result)
                return result;
        }
        if (rightPosition[1] < board[0].length && !usedPosition.includes(rightPosition.join(',')) &&
            board[rightPosition[0]][rightPosition[1]] === word[wordIdx]) {
            if (wordIdx === word.length - 1) {
                return true;
            }
            result = findNext(rightPosition, wordIdx + 1, [...usedPosition, rightPosition.join(',')]);
            if (result)
                return result;
        }
        if (bottomPosition[0] < board.length && !usedPosition.includes(bottomPosition.join(',')) &&
            board[bottomPosition[0]][bottomPosition[1]] === word[wordIdx]) {
            if (wordIdx === word.length - 1) {
                return true;
            }
            result = findNext(bottomPosition, wordIdx + 1, [...usedPosition, bottomPosition.join(',')]);
            if (result)
                return result;
        }
        return false;
    };
    let position: Array<number>;
    for (let i: number = 0; i < board.length; i++) {
        for (let j: number = 0; j < board[i].length; j++) {
            //* Find first letter.
            if (board[i][j] === word[0]) {
                position = [i, j];

                if (word.length === 1 || findNext(position, 1, [position.join(',')])) {
                    return true;
                } else {
                    continue;
                }
            }
        }
    }
    return false;
};
// @lc code=end

