/*
Runtime: 232 ms
Memory Usage: 8.3 MB
*/

func addToArrayForm(A []int, K int) []int {
    var array = []int{}
    var result = []int{}

    for i:=len(A)-1; i>=0; i--{
        A[i]+=K
        K=A[i]/10
        array = append(array,A[i]%10)
    }

    for K>0 {
        array = append(array,K%10)
        K=K/10
    }

    for i:=len(array)-1; i>=0; i--{
        result=append(result,array[i])
    }

    return result
}