/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
	const MIN = -Math.pow(2, 31)
	const MAX = Math.pow(2, 31) - 1

	if (Math.sign(x) === -1) {
		// 负整数
		let arr = (Math.abs(x) + '').split('').reverse()
		let newNum = 0 - parseInt(arr.join(''))
		if (newNum < MIN) {
			return 0
		} else {
			return newNum
		}
	} else {
		// 正整数
		let arr = (x + '').split('').reverse()
		let newNum = parseInt(arr.join(''))
		if (newNum > MAX) {
			return 0
		} else {
			return newNum
		}
	}
}

/**
 * 思路
 * 首先要考虑最大值和最小值，一个固定的范围
 * 再判断参数是正整数还是负整数
 * 然后做通过数组的 reverse 方法翻转
 * 输入值是负数，这是需要把翻转的数改为负数
 * 然后判断最大值和最小值
 */

console.log(reverse(123))
