/*
 * @lc app=leetcode id=706 lang=typescript
 *
 * [706] Design HashMap
 */

// @lc code=start
class MyHashMap {
    protected arr: Array<Array<number>>;
    constructor() {
        this.arr = new Array<Array<number>>();
    }

    put(key: number, value: number): void {
        let item: Array<number> = this.arr.find(item => item[0] === key);
        if (item) {
            item[1] = value;
        } else {
            item = [key, value];
            this.arr.push(item);
        }
    }

    get(key: number): number {
        let item: Array<number> = this.arr.find(item => item[0] === key);
        return item ? item[1] : -1;
    }

    remove(key: number): void {
        let itemIndex: number = this.arr.findIndex(item => item[0] === key);
        if (itemIndex > -1) {
            this.arr.splice(itemIndex, 1);
        }
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
// @lc code=end

