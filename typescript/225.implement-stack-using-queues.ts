/*
 * @lc app=leetcode id=225 lang=typescript
 *
 * [225] Implement Stack using Queues
 */

// @lc code=start
class MyStack {
	private values: Array<number>;
	constructor() {
		this.values = new Array<number>();
	}

	push(x: number): void {
		this.values.push(x);
	}

	pop(): number {
		return this.values.pop();
	}

	top(): number {
		return this.values[this.values.length - 1];
	}

	empty(): boolean {
		return this.values.length === 0;
	}
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
// @lc code=end

