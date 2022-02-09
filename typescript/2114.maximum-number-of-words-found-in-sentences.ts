/*
 * @lc app=leetcode id=2114 lang=typescript
 *
 * [2114] Maximum Number of Words Found in Sentences
 */

// @lc code=start
function mostWordsFound(sentences: string[]): number {
    return Math.max(...sentences.map(str => str.split(' ').length));
};
// @lc code=end

