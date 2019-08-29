/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
	let max
	if (nums.length === 1) {
		return nums[0]
	}
	for (let i = 0; i < nums.length - 1; i++) {
		let currentMax = nums[i],
			cur_max_arr = [nums[i]]
		for (let j = i + 1; j < nums.length; j++) {
			currentMax = currentMax + nums[j]
			cur_max_arr.push(currentMax)
			if (j === nums.length - 1) {
				cur_max_arr.push(nums[nums.length - 1])
				let finallyMax = Math.max(...cur_max_arr)
				if (max === undefined || max < finallyMax) {
					max = finallyMax
				}
			}
		}
	}

	return max
}

/**
 * 思路：
 *
 * 两层循环
 *
 * 外层 循环 n 遍
 * 内存 每次循环 nums.length - n 遍
 *
 * 用一个空的数组记录每次开始循环的第一个值和最后一个值以及其中的所有结果值，取出一个最大的
 * 每次内层循环完成之后都和外层缓存的最大值比较
 *
 */
