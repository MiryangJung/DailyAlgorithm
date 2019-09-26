/*
Runtime: 64 ms
Memory Usage: 36.8 MB
 */

var longestCommonPrefix = function(strs) {
    var result="";
    var i=0;
    if(strs.length===0) return ""
    while(i!==strs[0].length){
        i++;
        for(var j=1; j<strs.length; j++){
            if(strs[j].substr(0,i)!==strs[0].substr(0,i)) break;
        }
        if(j!=strs.length) break;
        result=strs[0].substr(0,i);
    }
    return result
};