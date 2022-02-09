/*
 * @lc app=leetcode id=2037 lang=typescript
 *
 * [2037] Minimum Number of Moves to Seat Everyone
 */

// @lc code=start
function minMovesToSeat(seats: number[], students: number[]): number {
    let result: number = 0;
    seats.sort((a, b) => a - b);
    students.sort((a, b) => a - b);
    for (let i: number = 0; i < students.length; i++) {
        result += Math.abs(students[i] - seats[i]);
    }
    return result;
};
// @lc code=end

