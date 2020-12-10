"use strict";

// Problem: https://leetcode.com/problems/median-of-two-sorted-arrays/
// Complexity log(m+n) binary search - very interesting problem.
// Tutorial: https://www.youtube.com/watch?v=LPFhl65R7ww&feature=emb_logo

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    if (nums1.length > nums2.length) {
        // we need to run binary search on smallest array
        return findMedianSortedArrays(nums2, nums1);
    }

    let firstArraySize = nums1.length, secondArraySize = nums2.length, start = 0, end = firstArraySize;

    // binary search
    while (start <= end) {
        const firstArrayPartition = Math.floor((start+end)/2);
        const secondArrayPartition = Math.floor((firstArraySize + secondArraySize + 1)/2) - firstArrayPartition;


        // edge cases
        const firstArrayLeftMax = (firstArrayPartition === 0) ? Number.MIN_SAFE_INTEGER : nums1[firstArrayPartition - 1];
        const firstArrayRightMin = (firstArrayPartition === firstArraySize) ? Number.MAX_SAFE_INTEGER : nums1[firstArrayPartition];

        const secondArrayLeftMax = (secondArrayPartition === 0) ? Number.MIN_SAFE_INTEGER : nums2[secondArrayPartition - 1];
        const secondArrayRightMin = (secondArrayPartition === secondArraySize) ? Number.MAX_SAFE_INTEGER : nums2[secondArrayPartition];


        if (firstArrayLeftMax <= secondArrayRightMin && secondArrayLeftMax <= firstArrayRightMin) {

            // found the right partition
            // even case
            if ((firstArraySize+secondArraySize) % 2 === 0) {
                return (Math.max(firstArrayLeftMax, secondArrayLeftMax) + Math.min(firstArrayRightMin, secondArrayRightMin)
)/2;
            } else {
                return Math.max(firstArrayLeftMax, secondArrayLeftMax);
            }

        } else if (firstArrayLeftMax > secondArrayRightMin) {
            // we are too much in right, go to left side
            end = firstArrayPartition - 1;
        } else {
            // we are too much in left, go to right side
            start = firstArrayPartition + 1;
        }
    }
    return 0.0;

};
