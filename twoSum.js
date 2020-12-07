"use strict";

// Problem: https://leetcode.com/problems/two-sum/
// Complexity O(n) and space O(n)

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const hashMap = new Map();
    for (let i = nums.length-1; i >= 0; --i) {
        const secondPair = target - nums[i];
        if (hashMap.has(secondPair)) {
            return [i, hashMap.get(secondPair)];
        }
        hashMap.set(nums[i], i);
    }
};
