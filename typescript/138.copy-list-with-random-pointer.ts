/*
 * @lc app=leetcode id=138 lang=typescript
 *
 * [138] Copy List with Random Pointer
 */

// @lc code=start
/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     next: Node | null
 *     random: Node | null
 *     constructor(val?: number, next?: Node, random?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */

function copyRandomList(head: Node | null): Node | null {
    let result: Node | null = null;
    let curNode: Node | null = head;
    let curNode2: Node | null = result;
    while (curNode) {
        if (curNode2) {
            curNode2.next = new Node(curNode.val);
            curNode2 = curNode2.next;
        } else {
            result = new Node(curNode.val);
            curNode2 = result;
        }
        curNode = curNode.next;
    }
    curNode = head;
    curNode2 = result;
    const findIndex = (node: Node) => {
        let result: number = 0;
        let curNode: Node | null = head;
        while (curNode) {
            if (curNode === node) {
                return result;
            } else {
                curNode = curNode.next;
                result++;
            }
        }
        return -1;
    }
    const getNodeByIndex = (head: Node, index: number) => {
        let result: Node = head;
        while (index > 0) {
            result = result.next;
            index--;
        }
        return result;
    }
    while (curNode) {
        if (curNode.random) {
            let randomIndex: number = findIndex(curNode.random);
            let randomNode: Node = getNodeByIndex(result, randomIndex);
            curNode2.random = randomNode;
        }
        curNode2 = curNode2.next;
        curNode = curNode.next;
    }
    return result;
};
// @lc code=end

