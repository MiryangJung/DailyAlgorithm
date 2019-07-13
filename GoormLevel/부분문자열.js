const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on("line", function(line) {
    arr=[];
    line.split("").map(x=>{arr.push(x); console.log(arr.join(""))});
    rl.close();
}).on("close", function() {
    process.exit();
});