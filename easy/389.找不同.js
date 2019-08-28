/*
 * @lc app=leetcode.cn id=389 lang=javascript
 *
 * [389] 找不同
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
	// const snap = s.split('')
	for (let v of t) {
		let s_index = s.indexOf(v)
		if (s_index !== -1) {
			s = s.replace(v, '0')
		} else {
			return v
		}
	}
}
