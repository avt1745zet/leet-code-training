/*
 * @lc app=leetcode id=1629 lang=typescript
 *
 * [1629] Slowest Key
 */

// @lc code=start
function slowestKey(releaseTimes: number[], keysPressed: string): string {
    let timeArr: Array<number> =
        releaseTimes.map((val, idx) => idx > 0 ? val - releaseTimes[idx - 1] : val);
    let slowestTime: number = Math.max(...timeArr);
    let slowestKeyCodes: Array<number> = Array<number>();
    timeArr.forEach((time, index) => {
        if (time === slowestTime) {
            slowestKeyCodes.push(keysPressed[index].charCodeAt(0));
        }
    });
    slowestKeyCodes.sort((a, b) => b - a);
    return String.fromCharCode(slowestKeyCodes[0]);
};
// @lc code=end

