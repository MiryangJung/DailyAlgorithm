/*
Runtime: 76 ms
Memory Usage: 37.1 MB
 */

var sortArrayByParity = function(A) {
    var arr=[];
    A.forEach(i => {i % 2 === 0 ? arr.unshift(i) : arr.push(i);});
    return arr;
};