/*
 * @lc app=leetcode id=2103 lang=typescript
 *
 * [2103] Rings and Rods
 */

// @lc code=start
function countPoints(rings: string): number {
    let result: number = 0;
    let arr: Array<string> = [];
    for (let i: number = 0; i < rings.length; i += 2) {
        const color: string = rings[i];
        const num: number = Number(rings[i + 1]);
        if (arr[num]) {
            if (!arr[num].includes(color)) {
                arr[num] += color;
            }
        } else {
            arr[num] = color;
        }
    }
    result = arr.filter(colors => colors.length === 3).length;
    return result;
};
// @lc code=end

