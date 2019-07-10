const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on("line", function(line) {
    var sum=0;
    for(i=3; i<=line; i++){
        if(i%3==0 || i%5==0) sum=sum+i;
    }
    console.log(sum);
    rl.close();
}).on("close", function() {
    process.exit();
});