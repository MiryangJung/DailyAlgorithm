/*
Runtime: 4 ms
Memory Usage: 3.7 MB
*/

func checkStraightLine(coordinates [][]int) bool {
    slope:=float32(coordinates[1][1]-coordinates[0][1])/float32(coordinates[1][0]-coordinates[0][0])
    for i:=2; i<len(coordinates); i++{
        if float32(coordinates[i][1]-coordinates[i-1][1])/float32(coordinates[i][0]-coordinates[i-1][0]) != slope{
            return false
        }
    }
    return true
}