/*
Runtime: 0 ms
Memory Usage: 2.4 MB
 */

func uniqueOccurrences(arr []int) bool {
    var count = make(map[int]int)
    for i:=0; i<len(arr); i++{
        count[arr[i]]++
    }

    var result = make(map[int]int)
    for _,value:=range count{
        result[value]++
        if result[value]!=1 {
            return false
        }
    }
    return true
}