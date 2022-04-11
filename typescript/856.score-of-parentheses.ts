/*
 * @lc app=leetcode id=856 lang=typescript
 *
 * [856] Score of Parentheses
 */

// @lc code=start
interface IParentheses {
    closed: boolean;
    startIndex: number;
    endIndex: number;
    score: number;
}

function scoreOfParentheses(s: string): number {
    let result: number = 0;
    let parentheses: Array<IParentheses> = new Array<IParentheses>();
    for (let i: number = 0; i < s.length; i++) {
        if (s[i] === '(') {
            parentheses.push({
                closed: false,
                startIndex: i,
                endIndex: undefined,
                score: 0
            });
        } else if (s[i] === ')') {
            let pairIndex: number = parentheses.length - 1;
            while (parentheses[pairIndex].closed)
                pairIndex--;
            parentheses[pairIndex].endIndex = i;
            parentheses[pairIndex].closed = true;
            if (parentheses[pairIndex].startIndex + 1 === parentheses[pairIndex].endIndex) {
                parentheses[pairIndex].score = 1;
            } else {
                for (let j: number = parentheses[pairIndex].startIndex + 1;
                    j < parentheses[pairIndex].endIndex;) {
                    let child: IParentheses = parentheses.find(p => p.startIndex === j);
                    parentheses[pairIndex].score += child.score;
                    j = child.endIndex + 1;
                }
                parentheses[pairIndex].score *= 2;
            }
        }
    }

    for (let i: number = parentheses[0].startIndex; i < s.length - 1;) {
        let child: IParentheses = parentheses.find(p => p.startIndex === i);
        result += child.score;
        i = child.endIndex + 1;
    }

    return result;
};
// @lc code=end

