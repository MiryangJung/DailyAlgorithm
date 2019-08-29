/*
Runtime: 44 ms
Memory Usage: 34.6 MB
 */

var uncommonFromSentences = function(A, B) {
    var arr=A.concat(" ",B).split(" ")
    var result=[]
    for(i=0; i<arr.length; i++){
        if(arr.slice(i+1).indexOf(arr[i])===-1) result.push(arr[i])
    }
    return result
};