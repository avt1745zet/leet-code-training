/*
 * @lc app=leetcode id=628 lang=typescript
 *
 * [628] Maximum Product of Three Numbers
 */

// @lc code=start
function maximumProduct(nums: number[]): number {
    let n: Array<number> = nums.filter(num => num < 0);
    let p: Array<number> = nums.filter(num => num >= 0);
    n.sort((a, b) => a - b);
    p.sort((a, b) => a - b);
    if (p.length > 0) {
        let maxP: number = p[p.length - 1];
        if (p.length > 2) {
            let pp: number = p[p.length - 2] * p[p.length - 3];
            if (n.length > 1) {
                let np: number = n[0] * n[1];
                return Math.max(pp * maxP, np * maxP);
            } else {
                return pp * maxP;
            }
        } else {
            let np: number = n[0] * n[1];
            return np * maxP;
        }
    } else {
        return n[n.length - 1] * n[n.length - 2] * n[n.length - 3];
    }
};
// @lc code=end

