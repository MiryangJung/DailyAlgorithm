/*
Runtime: 56 ms
Memory Usage: 36.1 MB
 */

var isHappy = function(n) {
    var before=[]
    while(n!==1 && !before[n]){
        before[n]=true
        n = n.toString().split('').reduce(function(prev, next) {
            return prev+Math.pow(next, 2);
        }, 0);
    }
    return n===1
};