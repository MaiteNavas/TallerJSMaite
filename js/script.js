//VARIABLES
let userAge = 35
let userCourses = 7
let userCoursesLastYear = 3
let userName = "Maite"
let userFamily = "Navas"
let userAnimal = "Dog"
let userMale = false
    console.log(userAge)
    console.log(userCourses)
    console.log(userCoursesLastYear)
    console.log(userName)
    console.log(userFamily)
    console.log(userAnimal)
    console.log(userMale)   
    document.write(userAge)
    document.write(userCourses)
    document.write(userCoursesLastYear)
    document.write(userName)
    document.write(userFamily)
    document.write(userAnimal)
    document.write(userMale)

let sumAge = userAge + 10
let totalCourses = userCourses - userCoursesLastYear
let CoursesMonth = userCoursesLastYear / 12
    console.log(sumAge)
    console.log(totalCourses)
    console.log(CoursesMonth)
    document.write(sumAge)
    document.write(totalCourses)
    document.write(CoursesMonth)

let maite = userName + userFamily + userAnimal
    console.log(maite)
    document.write(maite)


//FUNCIONES

function test() {
    return "Hola, " + [userName]
            

}
console.log(test)
document.write(test)