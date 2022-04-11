/*
 * @lc app=leetcode id=703 lang=typescript
 *
 * [703] Kth Largest Element in a Stream
 */

// @lc code=start
class KthLargest {
    private nums: Array<number>;
    private k: number;

    constructor(k: number, nums: number[]) {
        this.nums = [...nums];
        this.k = k;
        this.nums.sort((a, b) => b - a);
        this.nums.splice(this.k, this.nums.length - this.k);
    }

    add(val: number): number {
        if (this.nums[this.k - 1] !== undefined && val <= this.nums[this.k - 1]) {
            return this.nums[this.k - 1];
        } else {
            this.nums.push(val);
            this.nums.sort((a, b) => b - a);
            this.nums.splice(this.k, this.nums.length - this.k);
            return this.nums[this.k - 1];
        }
    }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
// @lc code=end

