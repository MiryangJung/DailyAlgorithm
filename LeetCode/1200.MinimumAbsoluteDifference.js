/*
Runtime: 192 ms
Memory Usage: 47.2 MB
 */

var minimumAbsDifference = function(arr) {
    arr.sort((x,y)=>x-y)
    var minus=[];
    var result=[];
    var min=arr[1]-arr[0];
    for(var i=1; i<arr.length; i++){
        if(min>(arr[i]-arr[i-1])) min=arr[i]-arr[i-1]
        minus.push(arr[i]-arr[i-1])
    }

    for(i=0; i<minus.length; i++){
        if(minus[i]===min) result.push([arr[i],arr[i+1]])
    }
    return result
};