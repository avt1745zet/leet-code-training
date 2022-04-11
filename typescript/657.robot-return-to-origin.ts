/*
 * @lc app=leetcode id=657 lang=typescript
 *
 * [657] Robot Return to Origin
 */

// @lc code=start
function judgeCircle(moves: string): boolean {
    let vertical: number = 0;
    let horizontal: number = 0;
    for (let i: number = 0; i < moves.length; i++) {
        switch (moves[i]) {
            case 'L':
                horizontal--;
                break;
            case 'R':
                horizontal++;
                break;
            case 'U':
                vertical++
                break;
            case 'D':
                vertical--;
                break;
        }
    }
    return vertical === 0 && horizontal === 0;
};
// @lc code=end

