func staircase(n int32) {
    var cnt,i int32
    for cnt!=n{
        cnt++
        for i=0; i<n-cnt; i++{
            fmt.Print(" ")
        }
        for i=0; i<cnt; i++{
            fmt.Print("#")
        }
        fmt.Println("")
    }
}