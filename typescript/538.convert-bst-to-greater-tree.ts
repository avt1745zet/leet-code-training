/*
 * @lc app=leetcode id=538 lang=typescript
 *
 * [538] Convert BST to Greater Tree
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

function convertBST(root: TreeNode | null, sum: { value: number } = { value: 0 }): TreeNode | null {
    if (root === null) {
        return null;
    }

    convertBST(root.right, sum);

    sum.value += root.val;
    root.val = sum.value;

    root.left = convertBST(root.left, sum);

    return root;
};
// @lc code=end

