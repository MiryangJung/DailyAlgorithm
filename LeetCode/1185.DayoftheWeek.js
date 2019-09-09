/*
Runtime: 48 ms
Memory Usage: 34 MB
 */

var dayOfTheWeek = function(day, month, year) {
    var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return week[new Date(year+'-'+month+'-'+day).getDay()];
};