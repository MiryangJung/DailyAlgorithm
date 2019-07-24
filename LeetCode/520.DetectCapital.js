/*
Runtime: 60 ms
Memory Usage: 34.3 MB
 */
var detectCapitalUse = function(word) {
    return word.toUpperCase()===word || word.toLowerCase()===word || word===word[0].toUpperCase()+word.substr(1).toLowerCase()
};