/*
 * @lc app=leetcode id=1202 lang=typescript
 *
 * [1202] Smallest String With Swaps
 */

// @lc code=start
function smallestStringWithSwaps(s: string, pairs: number[][]): string {
    let parant: Array<number> = new Array<number>(s.length);
    for (let i: number = 0; i < parant.length; i++) {
        parant[i] = i;
    }

    const find = (index: number) => {
        if (index !== parant[index]) {
            parant[index] = find(parant[index]);
            return parant[index];
        } else {
            return index;
        }
    }

    const union = (a: number, b: number) => {
        const aParant: number = find(a);
        const bParant: number = find(b);

        if (aParant === bParant)
            return;
        if (aParant < bParant) {
            parant[bParant] = aParant;
        } else {
            parant[aParant] = bParant;
        }
    }

    pairs.forEach(pair => {
        union(pair[0], pair[1]);
    });

    const map: Map<number, Array<number>> = new Map<number, Array<number>>();
    for (let i: number = 0; i < s.length; i++) {
        const parant: number = find(i);
        if (map.has(parant))
            map.get(parant).push(i);
        else
            map.set(parant, [i]);
    }

    const resultArr: Array<string> = new Array<string>(s.length);
    map.forEach(value => {
        const strArr: Array<string> = value.map(index => s[index]);
        strArr.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
        for (let i: number = 0; i < value.length; i++) {
            resultArr[value[i]] = strArr[i];
        }
    });

    let result: string = resultArr.join('');

    return result;
};
// @lc code=end

