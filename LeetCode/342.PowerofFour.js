/*
Runtime: 76 ms
Memory Usage: 35.6 MB
 */

var isPowerOfFour = function(num) {
    if(num===1 || num===4) return true;
    while(1){
        if(num/4===4 && num%4===0){
            return true;
        }else if(num/4!==0 && num%4===0){
            num=num/4;
        }else return false;
    }
};