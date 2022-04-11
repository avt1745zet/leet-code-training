/*
 * @lc app=leetcode id=705 lang=typescript
 *
 * [705] Design HashSet
 */

// @lc code=start
class MyHashSet {
    private arr: Array<number>;
    constructor() {
        this.arr = new Array<number>();
    }

    add(key: number): void {
        if (!this.contains(key)) {
            this.arr.push(key);
        }
    }

    remove(key: number): void {
        if (this.contains(key)) {
            this.arr.splice(this.arr.indexOf(key), 1);
        }
    }

    contains(key: number): boolean {
        return this.arr.includes(key);
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
// @lc code=end

