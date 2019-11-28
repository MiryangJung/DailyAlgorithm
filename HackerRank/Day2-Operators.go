func solve(meal_cost float64, tip_percent int32, tax_percent int32) {
    fmt.Print(math.Round(meal_cost+meal_cost*float64(tip_percent+tax_percent)/100))
}