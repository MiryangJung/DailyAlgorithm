/*
Runtime: 108 ms
Memory Usage: 38.9 MB
 */

var arrayPairSum = function(nums) {
    var sum=0;
    nums.sort((x,y)=>x-y)
    for (i=0; i<nums.length; i+=2){
        sum+=nums[i]
    }
    return sum
};