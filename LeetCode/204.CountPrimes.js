/*
Runtime: 172 ms
Memory Usage: 135.5 MB
 */

var countPrimes = function(n) {
    var cnt=0;
    var array=[];
    for(i=2;i<n;i++) {
        if (array[i]) continue;
        else cnt++;
        for(j=i+i;j<=n;j+=i) {
            array[j] = true;
        }
    }
    return cnt;
};