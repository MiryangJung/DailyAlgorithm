/*
Runtime: 72 ms
Memory Usage: 35.8 MB
 */

var searchInsert = function(nums, target) {
    if(nums.indexOf(target)===-1){
        nums.push(target)
        nums.sort((x,y)=>x-y);
    }
    return nums.indexOf(target)
};