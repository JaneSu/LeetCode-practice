/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
	// 非正常情况处理
	if (typeof s !== 'string' || s.length % 2 !== 0) return false
	if (s.length === 0) return true

	const stack = [] // 保存数据的栈

	for (let i = 0, len = s.length; i < len; i++) {
		let c = s.charAt(i)
		if (c === ')' || c === ']' || c === '}') {
			if (stack.length === 0) {
				return false
			} else {
				let popItem = stack.pop()
				if ((c === ')' && popItem === '(') || (c === ']' && popItem === '[') || (c === '}' && popItem === '{')) {
					if (i === len - 1) return true
					continue
				} else {
					return false
				}
			}
		} else {
			if (i === len - 1) return false
			stack.push(c)
		}
	}
}

/**
 * 思路：
 * 借助栈来完成判断
 * 括号有三种 () {} []
 * 碰到左边的括号，将字符串推入栈中
 * 碰到右边的括号，取出栈最上面的值
 * 如果匹配不上就说明括号没有闭合
 * 反之则是当前的括号闭合了，继续下面的判断
 */
