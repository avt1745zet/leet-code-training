/*
 * @lc app=leetcode id=278 lang=typescript
 *
 * [278] First Bad Version
 */

// @lc code=start
/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function (isBadVersion: any) {
    return function (n: number): number {
        let v: number = n;
        let h: number = n;
        let l: number = 1;
        const getCurrentState = () => {
            return isBadVersion(v);
        }
        const getPreviousState = () => {
            return isBadVersion(v - 1);
        }
        let currentState: boolean = getCurrentState();
        let previousState: boolean = getPreviousState();
        while (!(currentState && !previousState)) {
            if (currentState && previousState) {
                h = v - 1;
            } else if (!currentState && !previousState) {
                l = v;
            }
            v = Math.ceil((h + l) / 2);
            currentState = getCurrentState();
            previousState = getPreviousState();
        }
        return v;
    };
};
// @lc code=end

