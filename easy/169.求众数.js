/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 求众数
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
	let max_num, max_count
	nums.reduce((total, cur) => {
		total[cur] = total[cur] ? total[cur] + 1 : 1
		if (!max_count || max_count < total[cur]) {
			max_count = total[cur]
			max_num = cur
		}
		return total
	}, {})
	return max_num
}
