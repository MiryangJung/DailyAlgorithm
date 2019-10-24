/*
Runtime: 8 ms
Memory Usage: 6.4 MB
*/

func isSubsequence(s string, t string) bool {
    var idx,cnt int

    if len(s)==0{
        return true
    }

    for i:=0; i<len(t); i++{
        if t[i]==s[idx]{
            cnt++
            idx++
        }
        if cnt==len(s){
            return true
        }
    }
    return false
}