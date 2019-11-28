func countingValleys(n int32, s string) int32 {
    var h,cnt int32
    for _, chr := range s{
        if chr == 'U'{
            h++
            if h==0{
                cnt++
            }
        }else if chr == 'D'{
            h--
        }
    }
    return cnt
}