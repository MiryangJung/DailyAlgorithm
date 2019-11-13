func simpleArraySum(ar []int32) int32 {
    var sum int32
    for _,n := range ar{
        sum += n
    }
    return sum
}