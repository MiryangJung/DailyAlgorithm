func birthdayCakeCandles(ar []int32) int32 {
    var count = make(map[int32]int32)
    var max int32
    for _,n := range ar{
        count[n]++
    }
    for _,n:= range count{
        if int32(n)>max{
            max=n
        }
    }
    return max
}
