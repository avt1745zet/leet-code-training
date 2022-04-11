/*
 * @lc app=leetcode id=1496 lang=typescript
 *
 * [1496] Path Crossing
 */

// @lc code=start
function isPathCrossing(path: string): boolean {
    let nodes: Array<Array<number>> = new Array<Array<number>>();
    nodes.push([0, 0]);
    for (let i: number = 0; i < path.length; i++) {
        let newNode: Array<number>;
        switch (path[i]) {
            case 'N':
                if (path[i - 1] !== undefined && path[i - 1] === 'S') {
                    return true;
                }
                newNode = [nodes[nodes.length - 1][0], nodes[nodes.length - 1][1] + 1];
                break;
            case 'E':
                if (path[i - 1] !== undefined && path[i - 1] === 'W') {
                    return true;
                }
                newNode = [nodes[nodes.length - 1][0] + 1, nodes[nodes.length - 1][1]];
                break;
            case 'S':
                if (path[i - 1] !== undefined && path[i - 1] === 'N') {
                    return true;
                }
                newNode = [nodes[nodes.length - 1][0], nodes[nodes.length - 1][1] - 1];
                break;
            case 'W':
                if (path[i - 1] !== undefined && path[i - 1] === 'E') {
                    return true;
                }
                newNode = [nodes[nodes.length - 1][0] - 1, nodes[nodes.length - 1][1]];
                break;
        }
        if (nodes.find(node => node[0] === newNode[0] && node[1] === newNode[1])) {
            return true;
        } else {
            nodes.push(newNode);
        }
    }
    return false;
};
// @lc code=end

