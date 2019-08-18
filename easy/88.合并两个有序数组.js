/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
	nums1.splice(m)
	nums2.splice(n)

	for (let v of nums2) {
		nums1.push(v)
	}
	// nums1.sort((a, b) => a - b)
	sort(nums1)
}

function sort(list) {
	for (let i = 0; i < list.length - 1; i++) {
		for (let j = 0; j < list.length - 1 - i; j++) {
			let temp
			if (list[j] > list[j + 1]) {
				temp = list[j + 1]
				list[j + 1] = list[j]
				list[j] = temp
			}
		}
	}
}

/**
 * 思路：
 * 按照有效数量splice数组，不能用slice，因为不会修改原数组
 * 然后合并数组，冒泡排序
 *
 * 注意：不能使用concat，filter等方法，原因如上，不会修改原数据
 */

// console.log(handleIntegerArray([1, 2, 3, 0, 0, 0]))
