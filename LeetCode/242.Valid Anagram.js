/*
Runtime: 100 ms
Memory Usage: 38.2 MB
 */

var isAnagram = function(s, t) {
    return s.split('').sort().join('') === t.split('').sort().join('')
};