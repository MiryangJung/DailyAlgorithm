const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on("line", function(line) {
    var m=Number(line.split(" ")[0]);
    var n=Number(line.split(" ")[1]);
    (m>n) ? console.log(n) : console.log(m)
    rl.close();
}).on("close", function() {
    process.exit();
});