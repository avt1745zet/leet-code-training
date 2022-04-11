/*
 * @lc app=leetcode id=559 lang=typescript
 *
 * [559] Maximum Depth of N-ary Tree
 */

// @lc code=start
/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number, children?: Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = (children===undefined ? [] : children)
 *     }
 * }
 */

function maxDepth(root: Node | null, depth: number = 0): number {
    let result: number = 0;
    if (!root)
        return depth;
    else
        depth++;

    if (root.children.length > 0) {
        for (let i: number = 0; i < root.children.length; i++) {
            result = Math.max(result, maxDepth(root.children[i], depth));
        }
    } else {
        result = Math.max(result, depth);
    }
    return result;
};
// @lc code=end

