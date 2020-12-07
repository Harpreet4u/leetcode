"use strict";


// Problem: https://leetcode.com/problems/add-two-numbers/
// complexity O(n) n is length of longest linked list.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const resultNode = new ListNode();
    let carry = 0;
    let currentNode = resultNode;
    while(l1 && l2) {
        currentNode.next = new ListNode();
        currentNode = currentNode.next;
        const sumValue = (l1.val + l2.val + carry);
        carry = sumValue > 9 ? 1 : 0;
        currentNode.val = sumValue % 10;

        l1 = l1.next;
        l2 = l2.next;
    }
    while(l1) {
        currentNode.next = new ListNode();
        currentNode = currentNode.next;
        const sumValue = l1.val + carry;
        carry = sumValue > 9 ? 1 : 0;
        currentNode.val = sumValue % 10;
        l1 = l1.next;
    }
    while(l2) {
        currentNode.next = new ListNode();
        currentNode = currentNode.next;
        const sumValue = l2.val + carry;
        carry = sumValue > 9 ? 1 : 0;
        currentNode.val = sumValue % 10;
        l2 = l2.next;
    }
    if (carry) {
        currentNode.next = new ListNode();
        currentNode = currentNode.next;
        currentNode.val = carry;
    }
    return resultNode.next;
};
