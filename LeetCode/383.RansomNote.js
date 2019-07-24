/*
Runtime: 88 ms
Memory Usage: 42.4 MB
*/
var canConstruct = function(ransomNote, magazine) {
    let cnt=ransomNote.length;
    for(i=0; i<ransomNote.length; i++){
        if(magazine.indexOf(ransomNote.split('')[i])!=-1){
            cnt--;
            magazine=magazine.replace(ransomNote.split('')[i],'');
        }
    }
    return cnt===0;
};