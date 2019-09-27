/*
Runtime: 316 ms
Memory Usage: 34.9 MB
 */

var twoSum = function(numbers, target) {
    var index=0;
    for(i=0; i<numbers.length; i++){
        index=numbers.lastIndexOf(target-numbers[i]);
        if(index>0 && index!==i) return [i+1,index+1]
    }
};