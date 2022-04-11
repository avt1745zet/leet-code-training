/*
 * @lc app=leetcode id=1007 lang=typescript
 *
 * [1007] Minimum Domino Rotations For Equal Row
 */

// @lc code=start
function minDominoRotations(tops: number[], bottoms: number[]): number {
    let result: number = tops.length;

    for (let i: number = 1; i <= 6; i++) {
        let rotateCount: number = 0;
        for (let j: number = 0; j < tops.length; j++) {
            if (tops[j] === i)
                continue;
            if (bottoms[j] === i) {
                rotateCount++;
            } else {
                rotateCount = -1;
                break;
            }
        }

        if (rotateCount > -1)
            result = Math.min(result, rotateCount);

        rotateCount = 0;
        for (let j: number = 0; j < bottoms.length; j++) {
            if (bottoms[j] === i)
                continue;
            if (tops[j] === i) {
                rotateCount++;
            } else {
                rotateCount = -1;
                break;
            }
        }

        if (rotateCount > -1)
            result = Math.min(result, rotateCount);
    }

    return result === tops.length ? -1 : result;
};
// @lc code=end

