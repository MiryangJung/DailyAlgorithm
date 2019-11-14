function gradingStudents(grades) {
    var result=[]
    grades.forEach(n=>{
        if(n<38 || n%5<3){
            result.push(n)
        }else{
            result.push(n+(5-n%5))
        }
    })
    return result
}