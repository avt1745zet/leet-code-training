/*
 * @lc app=leetcode id=100 lang=typescript
 *
 * [100] Same Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    let result: boolean = true;

    if (!p && !q) {
        result = true;
        return result;
    }

    if ((!p && q) || (p && !q)) {
        result = false;
        return result;
    }

    if (p.val !== q.val) {
        result = false;
        return result;
    }

    if (p.left || q.left) {
        result = result && isSameTree(p.left, q.left);
    }

    if (p.right || q.right) {
        result = result && isSameTree(p.right, q.right);
    }

    return result;
};
// @lc code=end

