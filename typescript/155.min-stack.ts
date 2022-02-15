/*
 * @lc app=leetcode id=155 lang=typescript
 *
 * [155] Min Stack
 */

// @lc code=start
class MinStack {
    protected items: Array<number>;

    constructor() {
        this.items = new Array<number>();
    }

    push(val: number): void {
        this.items.push(val);
    }

    pop(): void {
        this.items.splice(this.items.length - 1, 1);
    }

    top(): number {
        return this.items[this.items.length - 1];
    }

    getMin(): number {
        let min: number = undefined;
        this.items.forEach(item => {
            min = min === undefined ? item : Math.min(min, item);
        });
        return min;
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end

