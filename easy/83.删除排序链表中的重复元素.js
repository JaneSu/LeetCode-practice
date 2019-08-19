/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
	if (!head) return head
	let node = head
	while (node.next !== null) {
		if (node.val !== node.next.val) {
			node = node.next
		} else {
			node.next = node.next.next || null
		}
	}
	return head
}

/**
 * 思路：
 * 首先要保存当前链表的完整记录
 * head指针从第一项开始比对 当前的val和next.val的值是否相等
 * 相等，则将next的指针指向next.next 再继续上面的比对
 * 如果不相等，将head指针移向next
 */
