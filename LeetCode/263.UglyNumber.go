/*
Runtime: 0 ms
Memory Usage: 2.2 MB
*/

func isUgly(num int) bool {
    if num <= 0 {
        return false
    }

    if num ==1 {
        return true
    }

    ugly := [3]int{5, 3, 2}

    for _, n := range ugly {
        for(num%n)==0{
            num/=n
        }
    }
    return num==1
}