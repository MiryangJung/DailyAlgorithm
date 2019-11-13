func compareTriplets(a []int32, b []int32) []int32 {
    result:=make([]int32, 2)
    for i:=0; i<len(a); i++{
        if a[i]>b[i]{
            result[0]++
        }else if a[i]<b[i]{
            result[1]++
        }
    }
    return result
}