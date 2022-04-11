/*
 * @lc app=leetcode id=205 lang=typescript
 *
 * [205] Isomorphic Strings
 */

// @lc code=start
function isIsomorphic(s: string, t: string): boolean {
    if (s.length !== t.length)
        return false;

    let map: Map<string, Array<number>> = new Map<string, Array<number>>();

    for (let i: number = 0; i < s.length; i++) {
        map.set(s[i], map.has(s[i]) ? [...map.get(s[i]), i] : [i]);
    }

    let map2: Map<string, Array<number>> = new Map<string, Array<number>>();

    for (let i: number = 0; i < t.length; i++) {
        map2.set(t[i], map2.has(t[i]) ? [...map2.get(t[i]), i] : [i]);
    }

    let keyCount1: number = [...map.keys()].length;
    let keyCount2: number = [...map2.keys()].length;

    if (keyCount1 !== keyCount2)
        return false;
    else {
        let values1: Array<Array<number>> = [...map.values()];
        let values2: Array<Array<number>> = [...map2.values()];
        for (let i: number = 0; i < values1.length; i++) {
            for (let j: number = 0; j < values1[i].length; j++) {
                if (values1[i][j] !== values2[i][j])
                    return false;
            }
        }
    }

    return true;
};
// @lc code=end

