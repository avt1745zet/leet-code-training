/*
 * @lc app=leetcode id=925 lang=typescript
 *
 * [925] Long Pressed Name
 */

// @lc code=start
function isLongPressedName(name: string, typed: string): boolean {
    let result: boolean = true;
    let arr: Array<string> = name.split('');
    let lastChar: string;
    for (let i: number = 0; i < typed.length; i++) {
        if (typed[i] === arr[0]) {
            lastChar = arr[0];
            arr.splice(0, 1);
        } else if (typed[i] !== lastChar) {//* no long pressed.
            result = false;
            break;
        }
    }
    if (arr.length > 0)
        result = false;
    return result;
};
// @lc code=end

