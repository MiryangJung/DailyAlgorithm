/*
Runtime: 76 ms
Memory Usage: 34.9 MB
 */

var maxNumberOfBalloons = function(text) {
    var result=0;
    var b=0, a=0, l=0, o=0, n=0;
    for(i=0; i<text.length; i++){
        switch ( text[i]) {
            case "b":
                b++;
                break;
            case "a":
                a++;
                break;
            case "l":
                l++;
                break;
            case "o":
                o++;
                break;
            case "n":
                n++
                break;
        }
        if(b>0&&a>0&&l>1&&o>1&&n>0){
            result++;
            b--; a--; l-=2; o-=2; n--;
        }
    }
    return result
};