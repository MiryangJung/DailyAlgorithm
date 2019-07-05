/*
Runtime: 84 ms
Memory Usage: 37.7 MB
 */

var majorityElement = function(nums) {
    nums.sort(function(a, b) {return a - b;
});
    return nums[Math.floor(nums.length/2)];
};