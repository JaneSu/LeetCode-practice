/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 */
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
	let index_snap = []
	if (ransomNote.length > magazine.length) return false
	for (let i = 0; i < ransomNote.length; i++) {
		for (let j = 0; j < magazine.length; j++) {
			if (index_snap.includes(j)) continue
			if (ransomNote[i] === magazine[j] && !index_snap.includes(j)) {
				index_snap.push(j)
				break
			}
			if (j === magazine.length - 1) {
				return false
			}
		}
	}
	return true
}
