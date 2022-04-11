/*
 * @lc app=leetcode id=881 lang=typescript
 *
 * [881] Boats to Save People
 */

// @lc code=start
function numRescueBoats(people: number[], limit: number): number {
    let result: number = 0;
    people.sort((a, b) => b - a);
    let remainingWeight: number = limit;
    let count: number = 0;
    for (let i: number = 0; people.length > 0;) {
        if (remainingWeight - people[i] >= 0) {
            count++;
            remainingWeight -= people[i];
            people.splice(i, 1);
            if (remainingWeight === 0 || i === people.length || count === 2) {
                remainingWeight = limit;
                result++;
                i = 0;
                count = 0;
            }
        } else {
            if (i === people.length - 1) {
                remainingWeight = limit;
                result++;
                i = 0;
                count = 0;
            } else
                i++;
        }
    }
    return result;
};
// @lc code=end

