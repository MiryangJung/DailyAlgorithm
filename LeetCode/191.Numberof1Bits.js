/*
Runtime: 60 ms
Memory Usage: 34.1 MB
*/

var hammingWeight = function(n) {
    return n.toString(2).replace(/0/gi,'').length;
};