func birthday(s []int32, d int32, m int32) int32 {
    var cnt,i,j int32
    for i=0; i<int32(len(s))-m+1; i++{
        var sum int32
        for j=i; j<i+m; j++{
            sum += s[j]
        }
        if sum==d{
            cnt++
        }
    }
    return cnt
}