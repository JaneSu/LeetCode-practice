/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
	let stock1 = new Array(n).fill('('),
		stock2 = new Array(n).fill(')'),
		arr = []

	function next(stock1, stock2, str = '') {
		if (stock1.length === 0 && stock2.length === 0) {
			arr.push(str)
			console.log(str)
			return
		}
		if (stock1.length > 0) {
			next(stock1, stock2, str + stock1.pop())
		}
		if (stock2.length > stock1.length) {
			next(stock1, stock2, str + stock2.pop())
		}
	}
	next(stock1, stock2, '')
	return arr
}

console.log(generateParenthesis(3))
