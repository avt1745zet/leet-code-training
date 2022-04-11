/*
 * @lc app=leetcode id=104 lang=typescript
 *
 * [104] Maximum Depth of Binary Tree
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

function maxDepth(root: TreeNode | null, depth: number = 0): number {
    if (!root)
        return depth;
    else
        depth += 1;
    let leftDepth: number = maxDepth(root.left, depth);
    let rightDepth: number = maxDepth(root.right, depth);
    return Math.max(leftDepth, rightDepth);
};
// @lc code=end

