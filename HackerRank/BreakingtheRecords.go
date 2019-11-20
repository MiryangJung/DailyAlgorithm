func breakingRecords(scores []int32) []int32 {
    result := make([]int32,2)
    min := scores[0]
    max := scores[0]

    for _,n := range scores{
        if min>n {
            min=n
            result[1]++
        }else if max<n{
            max=n
            result[0]++
        }
    }
    return result
}