/*
 * @lc app=leetcode id=1209 lang=typescript
 *
 * [1209] Remove All Adjacent Duplicates in String II
 */

// @lc code=start
function removeDuplicates(s: string, k: number): string {
	let result = "";
	let input = s;
	while(result === ""){
		let output = "";
		let lastChar = undefined;
		let count = 0;
		let temp = "";
		for(let i = 0; i < input.length; i++){
			if(count===0||input[i]===lastChar){
				temp += input[i];
				lastChar = input[i];
				count++;
				if(count===k){
					temp = "";
					lastChar = undefined;
					count = 0;
				}
			}else{
				output+=temp;
				temp = input[i];
				lastChar = input[i];
				count = 1;
			}
		}
		if(temp!=="")
			output+=temp;
		if(input===output)
			result = output;
		else
			input = output;
	}
	return result;
}
// @lc code=end

