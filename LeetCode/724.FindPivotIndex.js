/*
Runtime: 72 ms
Memory Usage: 37.7 MB
 */

var pivotIndex = function(nums) {
    const sum = nums.reduce((s, n) => s + n, 0)
    let lsum=0;
    for(i=0; i<nums.length; i++){
        if(lsum===sum-nums[i]-lsum) return i;
        lsum+= nums[i];
    }
    return -1;
};