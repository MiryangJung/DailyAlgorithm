/*
*/

func plusOne(digits []int) []int {
    for i:=len(digits)-1; i>=0; i--{
        if(digits[i]!=9){
            digits[i]+=1
            return digits
        }else{
            digits[i]=0
        }
    }

    var result = make([]int,len(digits)+1)
    result[0]=1
    return result
}