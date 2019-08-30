/*
Runtime: 64 ms
Memory Usage: 37.7 MB
 */

var fizzBuzz = function(n) {
    const arr=[]
    for(i=1; i<=n; i++){
        if(i%15===0) arr.push("FizzBuzz")
        else if(i%3===0) arr.push("Fizz")
        else if(i%5===0) arr.push("Buzz")
        else arr.push(i.toString())
    }
    return arr
};