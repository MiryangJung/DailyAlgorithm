func miniMaxSum(arr []int32) {
    var min, max, sum int64
    min=int64(arr[0])

    for _, n := range arr{
        sum+=int64(n)
        if min>int64(n){
            min=int64(n)
        }
        if max<int64(n){
            max=int64(n)
        }
    }

    fmt.Printf("%d %d",sum-max,sum-min)
}