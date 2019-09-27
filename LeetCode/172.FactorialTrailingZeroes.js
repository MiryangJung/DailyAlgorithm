/*
Runtime: 52 ms
Memory Usage: 34 MB
 */

var trailingZeroes = function(n) {
    var result=0;
    while(n>4){
        n=Math.floor(n/5)
        result+=n
    }
    return result
};

/*
Runtime: 56 ms
Memory Usage: 34.1 MB
 */

var trailingZeroes = function(n) {
    var result=0;
    for(i=n; i>0; i=Math.floor(i/5)){
        result += Math.floor(i/5)
    }
    return result
};