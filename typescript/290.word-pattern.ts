/*
 * @lc app=leetcode id=290 lang=typescript
 *
 * [290] Word Pattern
 */

// @lc code=start
function wordPattern(pattern: string, s: string): boolean {
    let patternIndicesMap: Map<string, Array<number>> = new Map<string, Array<number>>();
    let stringArray: Array<string> = s.split(' ');
    if (pattern.length != stringArray.length) {
        return false;
    }
    for (let i: number = 0; i < pattern.length; i++) {
        patternIndicesMap.set(pattern[i], patternIndicesMap.has(pattern[i])
            ? [...patternIndicesMap.get(pattern[i]), i] : [i]);
    }
    const patternkeys: Array<string> = Array<string>(...patternIndicesMap.keys());
    let patternWordMap: Map<string, string> = new Map<string, string>();
    for (let i: number = 0; i < patternkeys.length; i++) {
        const indices: Array<number> = patternIndicesMap.get(patternkeys[i]);
        for (let j: number = 0; j < indices.length; j++) {
            if (j === 0) {
                patternWordMap.set(patternkeys[i], stringArray[indices[j]])
            } else if (stringArray[indices[j]] !== patternWordMap.get(patternkeys[i])) {
                return false;
            }
        }
    }
    let wordArray: Array<string> = new Array<string>(...patternWordMap.values());
    for (let i: number = 0; i < wordArray.length; i++) {
        for (let j: number = i + 1; j < wordArray.length; j++) {
            if (wordArray[i] === wordArray[j]) {
                //* Words can't be same.
                return false;
            }
        }
    }
    return true;
};
// @lc code=end

