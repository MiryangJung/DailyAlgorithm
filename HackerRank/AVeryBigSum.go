func aVeryBigSum(ar []int64) int64 {
    var sum int64
    for _,n := range ar{
        sum+=n
    }
    return sum
}