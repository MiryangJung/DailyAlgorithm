/*
Runtime: 60 ms
Memory Usage: 34.9 MB
 */

var flipAndInvertImage = function(A) {
    arr=[];
    A.forEach(x=> arr.push(x.reverse().map(n=>!n)));
    return arr;
};