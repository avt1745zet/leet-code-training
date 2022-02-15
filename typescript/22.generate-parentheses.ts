/*
 * @lc app=leetcode id=22 lang=typescript
 *
 * [22] Generate Parentheses
 */

// @lc code=start
function generateParenthesis(n: number): string[] {
    let result: Array<string> = new Array<string>('');

    while (result[0].length != n * 2) {
        let length: number = result.length;

        for (let i: number = 0; i < length; i++) {
            let old: string = result[i];
            let arr: Array<string> = result[i].split('');
            if (arr.filter(value => value === '(').length < n) {
                let newStr: string = old + '(';
                if (isValidParenthesis(newStr)) {
                    result[i] = newStr;
                }
            }
            if (arr.filter(value => value === ')').length < n) {
                let newStr: string = old + ')';
                if (isValidParenthesis(newStr)) {
                    if (result[i].length === newStr.length) {
                        result.push(newStr);
                    } else {
                        result[i] = newStr;
                    }
                }
            }
        }
    }

    return result;
};

function isValidParenthesis(str: string): boolean {
    let validString: string = '';
    for (let i: number = 0; i < str.length; i++) {
        if (str[i] === '(') {
            validString += str[i];
        } else if (str[i] === ')' && validString[validString.length - 1] === '(') {
            validString = validString.slice(0, validString.length - 1);
        } else {
            return false;
        }
    }
    return true;
}
// @lc code=end

