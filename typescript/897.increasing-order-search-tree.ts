/*
 * @lc app=leetcode id=897 lang=typescript
 *
 * [897] Increasing Order Search Tree
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

function increasingBST(root: TreeNode | null, next: TreeNode | null = null): TreeNode | null {
    if (root === null)
        return next;

    root.right = increasingBST(root.right, next);
    let result: TreeNode | null = increasingBST(root.left, root);
    root.left = null;

    return result;
};
// @lc code=end

