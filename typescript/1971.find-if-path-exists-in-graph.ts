/*
 * @lc app=leetcode id=1971 lang=typescript
 *
 * [1971] Find if Path Exists in Graph
 */

// @lc code=start
function validPath(n: number, edges: number[][], source: number, destination: number): boolean {
    let graph: Map<number, Array<number>> = new Map<number, Array<number>>();
    edges.forEach(edge => {
        graph.has(edge[0])
            ? graph.get(edge[0]).push(edge[1]) : graph.set(edge[0], [edge[1]]);
        graph.has(edge[1])
            ? graph.get(edge[1]).push(edge[0]) : graph.set(edge[1], [edge[0]]);
    });

    let visted: Array<boolean> = new Array<boolean>(n);

    let list: Array<number> = new Array<number>();
    list.push(source);
    visted[source] = true;

    while (list.length > 0) {
        let val: number = list[0];
        if (val === destination) {
            return true;
        }
        list.splice(0, 1);
        graph.get(val).forEach(num => {
            if (!visted[num]) {
                visted[num] = true;
                list.push(num);
            }
        });
    }

    return false;
};
// @lc code=end

