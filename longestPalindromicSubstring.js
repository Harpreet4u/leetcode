"use strict";

// Problem: https://leetcode.com/problems/longest-palindromic-substring/
// Complexity: Time (O(n^2)) and space O(1)
// Dynamic programming solution have O(n*n) space complexity and time O(n^2)
// For linear complexity study Manchaster algorithm

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const stringSize = s.length;

    if (stringSize === 1) {
        return s;
    }

    let maxLength = 1;
    let maxLengthStart = 0;

    for (let k=1;k<stringSize;++k) {

        // even length case
        let i = k;
        let j = k-1;
        while (j>=0 && i<stringSize && s[i] === s[j]) {
            if ((i-j+1) > maxLength) {
                maxLengthStart = j;
                maxLength = i-j+1;
            }
            i++;
            j--;
        }

        // odd length case
        i = k+1;
        j = k-1;
        while (j>=0 && i<stringSize && s[i] === s[j]) {
            if ((i-j+1) > maxLength) {
                maxLengthStart = j;
                maxLength = i-j+1;
            }
            i++;
            j--;
        }
    }
    return s.slice(maxLengthStart, maxLengthStart + maxLength);
};
