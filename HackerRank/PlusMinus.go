func plusMinus(arr []int32) {
    var p,m,z float32
    var len float32 = float32(len(arr))
    for _,n:=range arr{
        if n==0{
            z++
        }else if n<0 {
            m++
        }else {
            p++
        }
    }
    fmt.Printf("%.6f\n%.6f\n%.6f",p/len,m/len,z/len)
}