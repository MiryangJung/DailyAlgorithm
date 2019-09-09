/*
Runtime: 48 ms
Memory Usage: 33.8 MB
 */
var numJewelsInStones = function(J, S) {
    var cnt=0;
    for(i=0; i<S.length; i++){
        if(J.indexOf(S[i])!=-1) cnt=cnt+1;
    }
    return cnt
};