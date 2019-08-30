/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
	let h1 = l1,
		h2 = l2,
		h3 = (l3 = new ListNode(h1.val + h2.val))
	one = 0

	if (h3.val > 9) {
		h3.val = h3.val % 10
		one = 1
	}
	while ((h1 !== null && h1.next !== null) || (h2 !== null && h2.next !== null)) {
		if (h1 === null || h1.next === null) {
			h3.next = new ListNode(h2.next.val + one)
		} else if (h2 === null || h2.next === null) {
			h3.next = new ListNode(h1.next.val + one)
		} else {
			h3.next = new ListNode(h1.next.val + h2.next.val + one)
		}

		if (h3.next.val > 9) {
			h3.next.val = h3.next.val % 10
			one = 1
		} else {
			one = 0
		}

		h3 = h3.next
		h1 = h1 ? h1.next : h1
		h2 = h2 ? h2.next : h2
	}
	if (one === 1) {
		h3.next = new ListNode(1)
	}
	return l3
}
