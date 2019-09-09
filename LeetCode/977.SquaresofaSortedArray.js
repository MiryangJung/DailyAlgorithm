/*
Runtime: 144 ms
Memory Usage: 44 MB
 */
var sortedSquares = function(A) {
    return A.map(x=>x*x).sort((x,y)=>x-y)
};