/*
 * @lc app=leetcode.cn id=771 lang=javascript
 *
 * [771] 宝石与石头
 */
/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
	let wordTable = {},
		count = 0
	for (let k in S) {
		if (!wordTable[S.charAt(k)]) {
			wordTable[S.charAt(k)] = 1
		} else {
			wordTable[S.charAt(k)]++
		}
	}

	for (let k in J) {
		if (wordTable[J.charAt(k)]) {
			count = count + wordTable[J.charAt(k)]
		}
	}
	return count
}
