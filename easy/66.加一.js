/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
	if (digits.length === 1) {
		// 处理整数0的情况
		if (digits[0] === 0) {
			return [1]
		} else {
			digits[0] = digits[0] + 1

			if ((digits[0] + '').length === 2) {
				return (digits[0] + '').split('')
			} else {
				return digits
			}
		}
	}

	let _num = 0
	// 从数组后面向前循环
	for (let i = digits.length - 1; i >= 0; i--) {
		if (i === digits.length - 1) {
			digits[i] = digits[i] + 1
			if (digits[i] === 10) {
				// 如果最后一位数 +1 之后为0
				// 前一位也需要 +1
				digits[i] = 0
				_num = 1
			} else {
				// 不为0就可以直接退出循环
				return digits
			}
		} else {
			digits[i] = digits[i] + _num
			if (digits[i] !== 10) {
				return digits
			} else {
				digits[i] = 0
				// 循环到第一位，结果仍是0，
				// 需要给数组第一位新增一个1
				if (i === 0) {
					digits.unshift(1)
					return digits
				}
			}
		}
	}
}

/**
 * 思路：
 * 1. 如果是单位数，需要考虑临界点的情况，比如 9
 * 【9】=》【1，0】
 * 2. 多位数的情况分两种
 * 2.1 临界点 999 9999 109
 * 这种最后一位 +1 之后需要变成 0 ，前一位 +1
 * 然后不断判断 +1 之后是否等于 10
 * 特殊情况是考虑三位数 +1 之后变成 四位数，999
 * 需要在数组前面 unshift 一个1
 * 2.2 非临界点
 * 最后一位 +1 之后就直接返回数组
 *
 * 注意： 需要判断什么时候终止循环，避免无效的循环次数
 */

console.log(plusOne([9, 9]))
