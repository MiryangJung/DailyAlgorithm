/*
Runtime: 168 ms
Memory Usage: 52.8 MB
 */

var findDisappearedNumbers = function(nums) {
    var nums2 = Array.from(new Set(nums));
    nums2.sort((x,y)=>x-y);
    var cnt=0;
    var arr=[];
    for(i=0; i<nums.length; i++){
        cnt++;

        if(!nums2[i]) {arr.push(cnt);}
        else if(nums2[i]!==cnt) {
            arr.push(cnt);
            i--;
        }
        if(nums2[i]===nums.length || nums.length===cnt) break;
    }
    return arr
};