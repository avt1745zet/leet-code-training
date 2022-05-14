/*
 * @lc app=leetcode id=173 lang=typescript
 *
 * [173] Binary Search Tree Iterator
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

class BSTIterator {
    private root: TreeNode | null = null;

    constructor(root: TreeNode | null) {
        this.root = root;
    }

    next(): number {
        let result: number;
        let tempNode: TreeNode | null = null;
        while (this.root !== null) {
            if (this.root.left !== null) {
                tempNode = this.root.left;
                while (tempNode.right !== null && tempNode.right !== this.root)
                    tempNode = tempNode.right;
                if (tempNode.right !== null) {
                    result = this.root.val;
                    this.root = this.root.right;
                    tempNode.right = null;
                    break;
                } else {
                    tempNode.right = this.root;
                    this.root = this.root.left;
                }
            } else {
                result = this.root.val;
                this.root = this.root.right;
                break;
            }
        }
        return result;
    }

    hasNext(): boolean {
        return this.root !== null;
    }
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
// @lc code=end

