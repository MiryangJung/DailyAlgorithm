func countApplesAndOranges(s int32, t int32, a int32, b int32, apples []int32, oranges []int32) {
    var acnt, ocnt int32
    for _,n := range apples{
        if a+n>=s && t>=a+n{
            acnt++
        }
    }
    for _,n := range oranges{
        if b+n>=s && t>=b+n{
            ocnt++
        }
    }
    fmt.Println(acnt)
    fmt.Println(ocnt)
}