/*
 * @lc app=leetcode id=284 lang=typescript
 *
 * [284] Peeking Iterator
 */

// @lc code=start
/**
 * // This is the Iterator's API interface.
 * // You should not implement it, or speculate about its implementation
 * class Iterator {
 *      hasNext(): boolean {}
 *
 *      next(): number {}
 * }
 */

class PeekingIterator {
    private iterator: Iterator;
    private nextValue: number;

    constructor(iterator: Iterator) {
        this.iterator = iterator;
        this.nextValue = this.iterator.next();
    }

    peek(): number {
        return this.nextValue;
    }

    next(): number {
        const temp: number = this.nextValue;
        this.nextValue = this.iterator.hasNext() ? this.iterator.next() : undefined;
        return temp;
    }

    hasNext(): boolean {
        return this.nextValue !== undefined;
    }
}

/**
 * Your PeekingIterator object will be instantiated and called as such:
 * var obj = new PeekingIterator(iterator)
 * var param_1 = obj.peek()
 * var param_2 = obj.next()
 * var param_3 = obj.hasNext()
 */
// @lc code=end

