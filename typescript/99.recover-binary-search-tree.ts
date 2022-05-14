/*
 * @lc app=leetcode id=99 lang=typescript
 *
 * [99] Recover Binary Search Tree
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

/**
 Do not return anything, modify root in-place instead.
 */
function recoverTree(root: TreeNode | null): void {
    let previousNode: TreeNode | null = null;
    let firstIncorrectNode: TreeNode | null = null;
    let secondIncorrectNode: TreeNode | null = null;
    let tempNode: TreeNode | null = null;

    while (root !== null) {
        if (root.left !== null) {
            tempNode = root.left;

            while (tempNode.right !== null && tempNode.right !== root)
                tempNode = tempNode.right;

            if (tempNode.right !== null) { //* === root
                tempNode.right = null;
                if (previousNode !== null && previousNode.val > root.val) {
                    if (firstIncorrectNode === null) {
                        firstIncorrectNode = previousNode;
                    }
                    secondIncorrectNode = root;
                }
                previousNode = root;
                root = root.right;
            } else {
                tempNode.right = root;
                root = root.left;
            }

        } else {
            if (previousNode !== null && previousNode.val > root.val) {
                if (firstIncorrectNode === null) {
                    firstIncorrectNode = previousNode;
                }
                secondIncorrectNode = root;
            }
            previousNode = root;
            root = root.right;
        }
    }
    if (firstIncorrectNode !== null && secondIncorrectNode !== null) {
        const tempVal: number = firstIncorrectNode.val;
        firstIncorrectNode.val = secondIncorrectNode.val;
        secondIncorrectNode.val = tempVal;
    }
};
//* Refer to: https://leetcode.com/problems/recover-binary-search-tree/discuss/32559/Detail-Explain-about-How-Morris-Traversal-Finds-two-Incorrect-Pointer
// @lc code=end

