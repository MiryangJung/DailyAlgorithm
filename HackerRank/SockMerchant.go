func sockMerchant(n int32, ar []int32) int32 {
    var count = make(map[int32]bool)
    var result int32
    for _,n:=range ar{
        if count[n]==true{
           result++
           count[n]=false
        }else {
            count[n]=true
        }
    }
    return result
}
