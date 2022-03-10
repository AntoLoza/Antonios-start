let birthYear = prompt("what year were you born? ")
let birthMonth = prompt("what month of" + birthYear + "what year where you born in? (in the form of a two digit number)")


let secondsSinceBirth = function(){
let currentMonth = new Date().getMonth() +1
let currentYear = new Date().getFullYear

birthYear = Number(birthYear)
birthMonth = Number(birthMonth)

let monthsToSeconds = 60 * 60 * 24 * 30
let yearsToSeconds = monthsToSeconds * 12

let yearToBirthday = 12 - birthMonth
console.log(yearToBirthday)
}
secondsSinceBirth(birthYear, birthMonth)

