/*
Runtime: 92 ms
Memory Usage: 6.5 MB
*/

func countCharacters(words []string, chars string) int {
    var cnt,result int

    for _,chr:=range words{
        cnt=0
        var m = map[byte]int{}
        for i:=0; i<len(chars); i++{
            m[chars[i]]++
        }
        for i:=0; i<len(chr); i++{
            if m[chr[i]]>0 {
                m[chr[i]]--
                cnt++
            }else{
                break
            }
        }
        if cnt==len(chr){
           result+=cnt
        }
    }
    return result
}