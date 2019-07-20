/*
Runtime: 60 ms
Memory Usage: 37.7 MB
*/

var selfDividingNumbers = function(left, right) {
    cnt=0;
    arr=[];
    for(i=left; i<=right; i++){
        i.toString().split('').forEach(x=>{
            if(i%x!=0) cnt++;
        })
        if(cnt===0) arr.push(i);
        cnt=0;
    }
    return arr;
};