/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 方案一
var containsDuplicate = function(nums) {
	if (nums.length < 1) return false
	for (let i = 0; i < nums.length; i++) {
		if (nums.indexOf(nums[i]) !== i) {
			return true
		}
	}
	return false
}

// 方案二
var containsDuplicate = function(nums) {
	let new_arr = [...new Set(nums)]
	if (new_arr.length !== nums.length) {
		return true
	}
	return false
}
console.log(containsDuplicate([1, 2, 3, 1]))
