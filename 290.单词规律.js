/*
 * @lc app=leetcode.cn id=290 lang=javascript
 *
 * [290] 单词规律
 */
/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
	let _pattern = pattern.split(''),
		_str = str.split(' '),
		patternDict = {}

	if (_pattern.length !== _str.length) return false

	for (let i = 0; i < _str.length - 1; i++) {
		if (_pattern[i] === _pattern[i + 1]) {
			if (_str[i] === _str[i + 1]) {
				continue
			} else {
				return false
			}
		} else {
			if (_str[i] === _str[i + 1]) return false
			if (patternDict[_pattern[i]] && patternDict[_pattern[i + 1]]) {
				if (patternDict[_pattern[i]] !== _str[i] || patternDict[_pattern[i + 1]] !== _str[i + 1]) return false
			}
			if (!patternDict[_pattern[i]]) {
				patternDict[_pattern[i]] = _str[i]
			}
			if (!patternDict[_pattern[i + 1]]) {
				patternDict[_pattern[i + 1]] = _str[i + 1]
			}
		}
	}
	return true
}
