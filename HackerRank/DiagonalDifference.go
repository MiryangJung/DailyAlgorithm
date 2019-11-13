func diagonalDifference(arr [][]int32) int32 {
    var result int32
    var i,j int
    for j <len(arr){
        result+=arr[j][j]
        j++
    }

    for i < len(arr){
        j--
        result-=arr[i][j]
        i++
    }

    if result <0{
        return result*-1
    }else {
        return result
    }
}