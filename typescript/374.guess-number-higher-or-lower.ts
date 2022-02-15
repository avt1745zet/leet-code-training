/*
 * @lc app=leetcode id=374 lang=typescript
 *
 * [374] Guess Number Higher or Lower
 */

// @lc code=start
/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

const GAME_MAX_NUMBER: number = Math.pow(2, 31) - 1;
const GAME_MIN_NUMBER: number = 1

function guessNumber(n: number): number {
    let result: number = n;
    let g: number = guess(result);
    let curMaxNumber: number = GAME_MAX_NUMBER;
    let curMinNumber: number = GAME_MIN_NUMBER;
    while (g !== 0) {
        if (g === 1) {
            curMinNumber = result + 1;
        } else {
            curMaxNumber = result - 1;
        }
        result = curMinNumber + Math.floor((curMaxNumber - curMinNumber) / 2);
        g = guess(result);
    }
    return result;
};
// @lc code=end

