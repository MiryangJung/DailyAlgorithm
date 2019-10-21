/*
Runtime: 24 ms
Memory Usage: 6.3 MB
*/

func validMountainArray(A []int) bool {
    inc := true

    if len(A)<=2{
        return false
    }
    for i:=1; i<len(A); i++{
        if A[i-1]==A[i]{
            return false
        }
        if inc==true {
            if A[i-1]>A[i]{
                inc=false
            }
            if i==1 && inc==false{
            return false
        }
        }else{
            if A[i-1]<A[i]{
                return false
            }
        }
    }
    if(inc==true){
        return false
    }
    return true
}