/*
 * @lc app=leetcode id=2166 lang=typescript
 *
 * [2166] Design Bitset
 */

// @lc code=start
class Bitset {
    private value: string;

    constructor(size: number) {
        this.value = ''.padStart(size, '0');
    }

    fix(idx: number): void {
        if (this.value[idx] === '0')
            this.value = this.value.slice(0, idx) + '1' + this.value.slice(idx + 1, this.value.length);
    }

    unfix(idx: number): void {
        if (this.value[idx] === '1')
            this.value = this.value.slice(0, idx) + '0' + this.value.slice(idx + 1, this.value.length);
    }

    flip(): void {
        let temp: string = this.value;
        this.value = '';
        for (let i: number = 0; i < temp.length; i++)
            this.value += temp[i] === '0' ? '1' : '0';
    }

    all(): boolean {
        return !this.value.includes('0');
    }

    one(): boolean {
        return this.value.includes('1');
    }

    count(): number {
        let result: number = 0;
        for (let i: number = 0; i < this.value.length; i++) {
            if (this.value[i] === '1')
                result++;
        }
        return result;
    }

    toString(): string {
        return this.value;
    }
}

/**
 * Your Bitset object will be instantiated and called as such:
 * var obj = new Bitset(size)
 * obj.fix(idx)
 * obj.unfix(idx)
 * obj.flip()
 * var param_4 = obj.all()
 * var param_5 = obj.one()
 * var param_6 = obj.count()
 * var param_7 = obj.toString()
 */
// @lc code=end

