/*
Runtime: 0 ms
Memory Usage: 2.1 MB
*/

func minCostToMoveChips(chips []int) int {
    var e,o int
    for _, chip := range chips{
        if chip%2==0{
            e++
        }else{
            o++
        }
    }
    if e<o{
        return e
    }else {
        return o
    }
}

