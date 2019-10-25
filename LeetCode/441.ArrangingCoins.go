/*
Runtime: 4 ms
Memory Usage: 2.2 MB
*/

func arrangeCoins(n int) int {
    cnt:=1
    for n>=cnt{
        n-=cnt
        cnt++
    }
    return cnt-1
}