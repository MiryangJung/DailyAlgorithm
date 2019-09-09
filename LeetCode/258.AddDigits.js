/*
Runtime: 76 ms
Memory Usage: 35.6 MB
 */

var addDigits = function(num) {
    return num<=9?num:(num%9||9)
};