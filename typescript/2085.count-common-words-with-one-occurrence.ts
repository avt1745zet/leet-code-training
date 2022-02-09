/*
 * @lc app=leetcode id=2085 lang=typescript
 *
 * [2085] Count Common Words With One Occurrence
 */

// @lc code=start
function countWords(words1: string[], words2: string[]): number {
    let result: number = 0;

    let lessWords: Array<string> = words1.length > words2.length ? words2 : words1;
    let moreWords: Array<string> = words1.length > words2.length ? words1 : words2;

    for (let i: number = 0; i < lessWords.length; i++) {
        let itemIndices: Array<number> = getItemIndices(lessWords[i], lessWords);
        if (itemIndices.length === 1) {
            itemIndices = getItemIndices(lessWords[i], moreWords);
            if (itemIndices.length === 1) {
                result++;
            }
        } else {
            itemIndices.reverse();
            itemIndices.forEach(index => lessWords.splice(index, 1));
            i -= 1;
        }
    }

    return result;
};

function getItemIndices<T>(specifiedItem: T, array: Array<T>): Array<number> {
    let result: Array<number> = [];
    array.forEach((item, index) => {
        if (item === specifiedItem) {
            result.push(index);
        }
    });
    return result;
}
// @lc code=end

