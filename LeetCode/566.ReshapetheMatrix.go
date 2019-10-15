/*
Runtime: 48 ms
Memory Usage: 90.5 MB
*/

func matrixReshape(nums [][]int, r int, c int) [][]int {
    if(r*c!=len(nums[0])*len(nums)){
        return nums
    }

    n:=0
    temp := []int{}
    result := [][]int{}

    for i:=0; i<len(nums); i++{
        for j:=0; j<len(nums[0]); j++{
            temp = append(temp,nums[i][j])
        }
    }

    for i:=0; i<r; i++{
        arr := []int{}
        for j:=0; j<c; j++{
            arr=append(arr,temp[n])
            n++;
        }
        result=append(result,arr)
    }
    return result
}