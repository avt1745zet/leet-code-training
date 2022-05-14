/*
 * @lc app=leetcode id=844 lang=typescript
 *
 * [844] Backspace String Compare
 */

// @lc code=start
function backspaceCompare(s: string, t: string): boolean {
    let a: string = "";
    let b: string = "";
    let backspaceCount: number = 0;
    for(let i: number = s.length - 1; i > -1; i--){
        if(s[i]==="#")
            backspaceCount++;
        else if(backspaceCount>0)
            backspaceCount--;
        else
            a=s[i]+a;
    }
    backspaceCount = 0;
    for(let i: number = t.length - 1; i > -1; i--){
        if(t[i]==="#")
            backspaceCount++;
        else if(backspaceCount>0)
            backspaceCount--;
        else
            b=t[i]+b;
    }
    return a===b;
};
// @lc code=end

