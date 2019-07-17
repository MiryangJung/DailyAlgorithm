/*
Runtime: 48 ms
Memory Usage: 33.8 MB
 */

var findComplement = function(num) {
    num=num.toString(2).split("").map(x => x === '1' ? '0': '1');
    return parseInt(num.join(''),2);
};