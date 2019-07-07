/*
Runtime: 64 ms
Memory Usage: 33.8 MB
 */

var defangIPaddr = function(address) {
    return address.replace(/\./g,"[.]")
};