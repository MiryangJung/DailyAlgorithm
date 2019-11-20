func migratoryBirds(arr []int32) int32 {
    var ar [6]int32
    var result,max,i int32
    for _, n := range arr{
        ar[n]++
    }

    for i=5; i>0; i--{
        if ar[i]>=max{
            max=ar[i]
            result=i
        }
    }

    return result
}