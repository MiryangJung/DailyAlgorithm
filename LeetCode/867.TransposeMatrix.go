/*
Runtime: 32 ms
Memory Usage: 7.6 MB
*/

func transpose(A [][]int) [][]int {

    result:=make([][]int, len(A[0]))

    for i:=0; i<len(A[0]); i++{
        result[i] = make([]int, len(A))
        for j:=0; j<len(A); j++{
            result[i][j]=A[j][i]
        }
    }
    return result
}