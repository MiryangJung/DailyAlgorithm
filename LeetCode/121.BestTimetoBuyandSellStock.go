/*
Runtime: 4 ms
Memory Usage: 3.1 MB
*/

func maxProfit(prices []int) int {
    tmp := 0
    max := 0
    for i := 1; i < len(prices); i++ {
        tmp += prices[i] - prices[i-1]
        if tmp < 0 {
            tmp = 0
        }
        if tmp > max {
            max = tmp
        }
    }
    return max
}