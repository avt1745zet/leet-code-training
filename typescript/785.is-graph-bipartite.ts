/*
 * @lc app=leetcode id=785 lang=typescript
 *
 * [785] Is Graph Bipartite?
 */

/**
 * Refer to: https://leetcode.com/problems/is-graph-bipartite/discuss/115487/Java-Clean-DFS-solution-with-Explanation
 */
// @lc code=start
function isBipartite(graph: number[][]): boolean {
    const n: number = graph.length;
    const colors: Array<Color> = new Array<Color>(n).fill(Color.NONE);

    const validColor = (node: number, color: Color) => {
        if (colors[node] !== 0) { //* This node has been colored.
            return colors[node] === color;
        }
        colors[node] = color;
        for (let i: number = 0; i < graph[node].length; i++) { //* Valid adjacent node.
            if (!validColor(graph[node][i], -color)) {
                return false;
            }
        }
        return true;
    }

    for (let i: number = 0; i < n; i++) {
        if (colors[i] === Color.NONE && !validColor(i, Color.RED)) {
            return false;
        }
    }

    return true;
};

enum Color {
    NONE = 0,
    RED = 1,
    GREEN = -1
}
// @lc code=end

