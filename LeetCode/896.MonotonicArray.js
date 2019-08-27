/*
Runtime: 224 ms
Memory Usage: 49.2 MB
 */

var isMonotonic = function(A) {
    var B=A.slice()
    var C=A.slice()
    return A.join('')===B.sort((x,y)=>x-y).join('') || A.join('')===C.sort((x,y)=>y-x).join('')
};