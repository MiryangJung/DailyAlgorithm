/*
Runtime: 64 ms
Memory Usage: 41.1 MB
 */

var reverseWords = function(s) {
    return s.split("").reverse().join("").split(" ").reverse().join(" ")
};