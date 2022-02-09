/*
 * @lc app=leetcode id=2073 lang=typescript
 *
 * [2073] Time Needed to Buy Tickets
 */

// @lc code=start
function timeRequiredToBuy(tickets: number[], k: number): number {
    let result: number = 0;
    for (let i: number = 0; true; i = i === tickets.length ? 0 : i + 1) {
        if (tickets[i] > 0) {
            tickets[i]--;
            result++;
            if (tickets[i] === 0 && i === k) {
                break;
            }
        }
    }
    return result;
};
// @lc code=end

