/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
	let endIndex, maxHeight, maxArea, area
	for (let i = 0; i < height.length; i++) {
		endIndex = height.length - 1
		while (endIndex > i) {
			maxHeight = height[i] > height[endIndex] ? height[endIndex] : height[i]
			area = maxHeight * (endIndex - i)
			if (!maxArea || maxArea < area) {
				maxArea = area
			}
			endIndex--
		}
	}
	return maxArea
}

// console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))
