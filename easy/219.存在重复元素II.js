/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
	for (let i = 0; i < nums.length - 1; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			let first = nums[i],
				sec = nums[j]
			if (first === sec && Math.abs(i - j) <= k) {
				return true
			}
		}
	}
	return false
}
// console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3]))
