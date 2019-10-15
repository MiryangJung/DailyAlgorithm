/*
Runtime: 32 ms
Memory Usage: 6.3 MB
*/

func findMaxConsecutiveOnes(nums []int) int {
    var cnt, max int

    for _,num := range nums{
        if(num==1){
            cnt++
            if(cnt>max){
                max=cnt
            }
        }else{
            cnt=0
        }
    }
    return max
}