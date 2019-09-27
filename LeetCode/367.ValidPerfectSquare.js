/*
Runtime: 64 ms
Memory Usage: 34.5 MB
 */

var isPerfectSquare = function(num) {
    for(i=0; i*i<=num; i++){
        if(i*i===num) return true
    }
    return false
};