/*
Runtime: 56 ms
Memory Usage: 37.2 MB
*/

var judgeCircle = function(moves) {
    let i=j=0;
    moves.split('').forEach(x=>{
        switch(x){
            case 'L':
                i++
                break
            case 'R':
                i--
                break
            case 'U':
                j++
                break
            case 'D':
                j--
                break
        }
    })
    return i===0 && j===0;
};