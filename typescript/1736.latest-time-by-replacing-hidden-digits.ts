/*
 * @lc app=leetcode id=1736 lang=typescript
 *
 * [1736] Latest Time by Replacing Hidden Digits
 */

// @lc code=start
function maximumTime(time: string): string {
    let arr: Array<number> = new Array<number>();
    for (let i: number = 0; i < time.length; i++) {
        if (time[i] !== ':') {
            arr.push(parseInt(time[i]));
        }
    }
    let hr: number = 0;
    if (isNaN(arr[0]) && isNaN(arr[1])) {
        hr = 23;
    } else if (isNaN(arr[0])) {
        hr = arr[1];
        while (hr + 10 <= 23)
            hr += 10;
    } else if (isNaN(arr[1])) {
        hr = arr[0] * 10;
        while (hr < 23 && hr % 10 < 9)
            hr += 1;
    } else {
        hr = arr[0] * 10 + arr[1];
    }
    let min: number = 0;
    if (isNaN(arr[2]) && isNaN(arr[3])) {
        min = 59;
    } else if (isNaN(arr[2])) {
        min = arr[3];
        while (min + 10 <= 59)
            min += 10;
    } else if (isNaN(arr[3])) {
        min = arr[2] * 10;
        while (min < 59 && min % 10 < 9)
            min += 1;
    } else {
        min = arr[2] * 10 + arr[3];
    }
    return hr.toString().padStart(2, '0') + ':' + min.toString().padStart(2, '0');
};
// @lc code=end

