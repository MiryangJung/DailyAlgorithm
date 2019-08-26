/*
Runtime: 52 ms
Memory Usage: 33.8 MB
*/

var findOcurrences = function(text, first, second) {
    const arr=[];
    const textarr = text.split(' ');
    for(i=1; i<textarr.length-1; i++)
        if(textarr[i-1]===first && textarr[i]===second) arr.push(textarr[i+1])
    return arr
}
