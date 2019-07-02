/*
Runtime: 60 ms
Memory Usage: 40 MB
*/

var containsDuplicate = function(nums) {
    return new Set(nums).size < nums.length;
};