/*
 * @lc app=leetcode id=895 lang=typescript
 *
 * [895] Maximum Frequency Stack
 */

// @lc code=start
class FreqStack {
    private valueAmountMap: Map<number, number>;
    private amountValuesMap: Map<number, Array<number>>;
    private maxAmount: number;

    constructor() {
        this.valueAmountMap = new Map<number, number>();
        this.amountValuesMap = new Map<number, Array<number>>();
        this.maxAmount = 0;
    }

    push(val: number): void {
        let amount: number = this.valueAmountMap.has(val) ? this.valueAmountMap.get(val) + 1 : 1;
        this.valueAmountMap.set(val, amount);
        this.maxAmount = Math.max(this.maxAmount, amount);
        let values: Array<number> =
            this.amountValuesMap.has(amount) ? this.amountValuesMap.get(amount) : new Array<number>();
        values.push(val);
        this.amountValuesMap.set(amount, values);
    }

    pop(): number {
        let values: Array<number> = this.amountValuesMap.get(this.maxAmount);
        let result: number = values.pop();
        let amount: number = this.maxAmount - 1;
        if (values.length === 0)
            this.maxAmount--;
        this.valueAmountMap.set(result, amount);
        return result;
    }
}

/**
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */
// @lc code=end

