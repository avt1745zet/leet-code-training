/*
 * @lc app=leetcode id=230 lang=typescript
 *
 * [230] Kth Smallest Element in a BST
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
//[4,2,5,null,3]\n1
function kthSmallest(root: TreeNode | null, k: number, order: { value: number } = { value: 0 }): number {
    if (root === null)
        return order.value;
    let l = kthSmallest(root.left, k, order);
    if (k === order.value)
        return l;
    order.value++;
    if (k === order.value)
        return root.val;
    let r = kthSmallest(root.right, k, order);
    if (k === order.value)
        return r;
    return order.value;
};
// @lc code=end

