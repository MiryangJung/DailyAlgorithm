/*
Runtime: 68 ms
Memory Usage: 35.1 MB
 */
var dominantIndex = function(nums) {
    if(nums.length===1) return 0
    var arr=nums.slice().sort((x,y)=>y-x)
    return arr[0] >= arr[1]*2 ? nums.indexOf(arr[0]) : -1
};