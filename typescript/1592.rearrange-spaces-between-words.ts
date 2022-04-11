/*
 * @lc app=leetcode id=1592 lang=typescript
 *
 * [1592] Rearrange Spaces Between Words
 */

// @lc code=start
function reorderSpaces(text: string): string {
    let result: string;
    let words: Array<string> = new Array<string>();
    let spaceCount: number = 0;
    for (let i: number = 0; i < text.length; i++) {
        if (text[i] === ' ') {
            spaceCount++;
        } else {
            if (i === 0 || text[i - 1] === ' ') {
                words.push(text[i]);
            } else {
                words[words.length - 1] += text[i];
            }
        }
    }
    if (words.length > 1) {
        result = words.join(''.padStart(Math.floor(spaceCount / (words.length - 1)), ' ')) + ''.padStart(spaceCount % (words.length - 1), ' ');;
    } else {
        result = words[0] + ''.padStart(spaceCount, ' ');
    }
    return result;
};
// @lc code=end

