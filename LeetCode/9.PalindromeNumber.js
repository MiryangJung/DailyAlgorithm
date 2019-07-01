/*
Runtime: 204 ms
Memory Usage: 46 MB
*/

var isPalindrome = function(x) {
    if(x === Number(x.toString().split("").reverse().join(""))) return true
    return false
};