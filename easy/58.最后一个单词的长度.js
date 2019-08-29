/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
	let wordArr = s.trim().split(' ')
	let [lastWord] = wordArr.slice(-1)
	if (lastWord === ' ') {
		return 0
	} else {
		return lastWord.length
	}
}
