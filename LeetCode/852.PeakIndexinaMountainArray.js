/*
Runtime: 52 ms
Memory Usage: 35.2 MB
 */

var peakIndexInMountainArray = function(A) {
    for (i=0; i<A.length-1; i++){
        if(A[i]>A[i+1]) return i
    }
};