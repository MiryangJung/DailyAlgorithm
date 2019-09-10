/*
Runtime: 92 ms
Memory Usage: 41.6 MB
 */

var sortArrayByParityII = function(A) {
    var a=[];
    var b=[];
    var result=[];
    A.forEach(n=>{
        if(n%2===0) a.push(n);
        else b.push(n);
    })
    for(i=0; i<A.length/2; i++){
        result.push(a[i])
        result.push(b[i])
    }
    return result
};