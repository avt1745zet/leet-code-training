/*
 * @lc app=leetcode id=383 lang=typescript
 *
 * [383] Ransom Note
 */

// @lc code=start
function canConstruct(ransomNote: string, magazine: string): boolean {
    for (let i: number = 0; i < ransomNote.length; i++) {
        let index: number = magazine.indexOf(ransomNote[i]);
        if (index >= 0) {
            magazine = magazine.slice(0, index) + magazine.slice(index + 1, magazine.length);
        } else {
            return false;
        }
    }
    return true;
};
// @lc code=end

