/*
Runtime: 64 ms
Memory Usage: 35.8 MB
 */

var isPowerOfTwo = function(n) {
    return (n>0) && (n&(n-1))===0
};