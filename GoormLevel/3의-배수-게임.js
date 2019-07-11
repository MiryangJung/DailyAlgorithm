const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on("line", function(line) {
    var arr=[];
    for(i=1; i<=line; i++){
        if(i%3==0) arr.push("X");
        else arr.push(i);
    }
    console.log(arr.join(" ")+" ");
    rl.close();
}).on("close", function() {
    process.exit();
});