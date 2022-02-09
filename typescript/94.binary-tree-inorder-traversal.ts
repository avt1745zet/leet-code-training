/*
 * @lc app=leetcode id=94 lang=typescript
 *
 * [94] Binary Tree Inorder Traversal
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

function inorderTraversal(root: TreeNode | null): number[] {
    let result: Array<number> = [];
    let curNode: TreeNode = root;
    if (!curNode ) {
        return result;
    }
    if (curNode.left) {
        result.push(...inorderTraversal(root.left));
        result.push(curNode.val);
    } else {
        result.push(curNode.val);
    }
    if (curNode.right) {
        result.push(...inorderTraversal(root.right));
    }
    return result;
}
// @lc code=end

