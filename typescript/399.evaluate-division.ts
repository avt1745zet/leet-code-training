/*
 * @lc app=leetcode id=399 lang=typescript
 *
 * [399] Evaluate Division
 */

//* Refer to: https://leetcode.com/problems/evaluate-division/discuss/171649/1ms-DFS-with-Explanations
// @lc code=start
function calcEquation(equations: string[][], values: number[], queries: string[][]): number[] {
    const result: Array<number> = new Array<number>(queries.length);
    const map: Map<string, Map<string, number>> = new Map<string, Map<string, number>>();

    equations.forEach((equation, index) => {
        let a: string = equation[0];
        let b: string = equation[1];
        if (!map.has(a))
            map.set(a, new Map<string, number>());
        map.get(a).set(b, values[index]);

        if (!map.has(b))
            map.set(b, new Map<string, number>());
        map.get(b).set(a, 1 / values[index]);
    });

    const getWeight = (start: string, end: string, visted: Array<string> = []) => {
        if (!map.has(start) || !map.has(end))
            return -1;
        if (map.get(start).has(end))
            return map.get(start).get(end);

        visted.push(start);
        for (let neighbour of map.get(start)) {
            if (!visted.includes(neighbour[0])) {
                let product: number = getWeight(neighbour[0], end, visted);
                if (product === -1)
                    continue;
                product *= neighbour[1];
                return product;
            }
        }

        return -1;
    };

    queries.forEach((querie, index) => {
        result[index] = getWeight(querie[0], querie[1])
    });

    return result;
};
// @lc code=end