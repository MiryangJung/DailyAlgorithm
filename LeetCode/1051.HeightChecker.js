/*
Runtime: 60 ms
Memory Usage: 34.9 MB
*/

var heightChecker = function(heights) {
    let cnt=0;
    let arr=heights.slice().sort((a,b)=> a-b);
    for(i=0; i<heights.length; i++){
        if(heights[i]!==arr[i]) cnt++;
    }
    return cnt;
};