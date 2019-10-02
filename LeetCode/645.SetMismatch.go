/*
*/

func findErrorNums(nums []int) []int {
    m := make([]int,len(nums)+1)
    var a,b int

    for _,num:=range nums{
        m[num]++
    }

    for i:=1; i<=len(nums); i++{
        if m[i]==0{
            b=i
        }else if m[i]==2{
            a=i
        }
        if a>0&&b>0 {
            break
        }
    }
   return []int{a,b}
}