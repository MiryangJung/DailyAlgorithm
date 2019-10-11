/*
Runtime: 60 ms
Memory Usage: 34 MB
 */

var checkRecord = function(s) {
    var A=0,L=0;
    for(i=0; i<s.length; i++){
        if(s[i]==='A'){
            A++;
            L=0;
        }else if(s[i]==='L'){
            L++;
        }else{
            L=0;
        }

        if(L>2 || A>1) return false
    }
    return true
};