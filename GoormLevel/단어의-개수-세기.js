const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on("line", function(line) {
    cnt=0;
    line.split(' ').forEach(x=>{if(x!='') cnt++;})
    console.log(cnt);
    rl.close();
}).on("close", function() {
    process.exit();
});