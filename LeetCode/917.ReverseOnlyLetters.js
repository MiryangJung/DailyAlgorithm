/*
Runtime: 44 ms
Memory Usage: 33.9 MB
 */

var reverseOnlyLetters = function(S) {
    var arr=[];
    var alp=[];
    var cnt=S.length;

    for(i=0; i<S.length; i++){
        if((S[i]>="A"&&S[i]<="Z")||(S[i]>="a"&&S[i]<="z")){
            alp.push(S[i])
            arr.push("")
        }
        else arr[i]=S[i]
    }


    for(i=0; i<alp.length; i++){
        cnt--;
        if(arr[cnt]==="") arr[cnt]=alp[i]
        else i--;
    }

    return arr.join("")
};