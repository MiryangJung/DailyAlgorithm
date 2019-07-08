/*
Runtime: 60 ms
Memory Usage: 34.9 MB
*/

var lastStoneWeight = function(stones) {
    while(stones.length>1){
        stones.sort((a, b)=> b - a);
        stones.push(stones[0]-stones[1]);
        stones.splice(0,2);
    }
    return stones[0];
}