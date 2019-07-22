/*
Runtime: 4520 ms
Memory Usage: 40.6 MB
*/

var numEquivDominoPairs = function(dominoes) {
    let cnt=0;
    for(i=0; i<dominoes.length; i++){
        for(j=i+1; j<dominoes.length; j++){
            if(dominoes[i][0]===dominoes[j][0] && dominoes[i][1]===dominoes[j][1]) cnt++;
            else if(dominoes[i][1]===dominoes[j][0] && dominoes[i][0]===dominoes[j][1]) cnt++;
        }
    }
    return cnt;
};