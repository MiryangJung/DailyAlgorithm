/*
Runtime: 48 ms
Memory Usage: 33.7 MB
 */

var lengthOfLastWord = function(s) {
    return s.trim().split(" ").reverse()[0].length
};