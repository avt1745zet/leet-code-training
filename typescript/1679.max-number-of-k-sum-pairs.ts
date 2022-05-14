/*
 * @lc app=leetcode id=1679 lang=typescript
 *
 * [1679] Max Number of K-Sum Pairs
 */

// @lc code=start
function maxOperations(nums: number[], k: number): number {
	let result = 0;
	const array: Array<number> = [];
	for(let i = 0; i < nums.length; i++){
		let pass = false;
		for(let j = 0; j < array.length; j++){
			if(nums[i]===array[j]){
				result++;
				pass = true;
				array.splice(j,1);
				break;
			}
		}
		if(!pass){
			array.push(k-nums[i]);
		}
	}
	return result;
}
// @lc code=end

