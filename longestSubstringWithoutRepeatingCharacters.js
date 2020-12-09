/**
 * @param {string} s
 * @return {number}
 */

// Problem: https://leetcode.com/problems/longest-substring-without-repeating-characters/submissions/
// Complexity: O(n) in time and O(m) in space (m is charset in string)

const lengthOfLongestSubstring = function(s) {

    let i = 0;
    let ans = 0;
    const size = s.length;
    const map = new Map();

    // Linear complexity and charset space complexity
    for(let j=0; j<size; ++j) {
        if (map.has(s[j])) {
            i = Math.max(map.get(s[j]), i);
        }

        ans = Math.max(ans, j - i + 1);
        map.set(s[j], j+1);
    }

    return ans;
};


