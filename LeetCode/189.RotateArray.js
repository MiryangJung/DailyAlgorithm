/*
Runtime: 96 ms
Memory Usage: 35.4 MB
 */

var rotate = function(nums, k) {
    for(var i = 0; i < k; i++)
        nums.unshift(nums.pop());
};