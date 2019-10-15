/*
Runtime: 644 ms
Memory Usage: 42.4 MB
 */

var removeDuplicates = function(S) {
    for (i=1; i<S.length; i++){
        if(S[i-1]==S[i]){
            S=S.replace(S[i]+S[i],"")
            i=0
        }
    }
    return S
};