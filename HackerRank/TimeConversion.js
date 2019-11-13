function timeConversion(s) {
    if (s[8]=='A'){
        var hour = s.substr(0,2)
        if (hour=="12"){
            s="00"+s.substr(2,6)
            return s
        }
        s=s.substr(0,8)
        return s
    }else if(s[8]=='P'){
        var hour = s.substr(0,2)
        if(hour=="12"){
            s=s.substr(0,8)
            return s
        }
        hour = Number(hour)+12
        s=hour+s.substr(2,6)
        return s
    }
}
