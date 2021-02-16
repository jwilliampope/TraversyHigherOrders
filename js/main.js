const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2003 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
]

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32]

// forEach map filter sort reduce

// ============================================

// FOR EACH

// for (let i = 0; i < companies.length; i++) {
//   console.log(companies[i])
// }

// companies.forEach(function (company) {
//   console.log(company.name)
// })

// companies.forEach(company => console.log(company.name))

// companies.forEach(myFunction)

// function myFunction(item, index) {
//   document.getElementById("source1").innerHTML += `${index}  : ${item.name} <br>`
// }

// myFunction()

// ============================================

// FILTER

// w/ for loop:

// (21 and older):

// let canDrink = []
// for (let i = 0; i < ages.length; i++) {
//   if (ages[i] >= 21) {
//     canDrink.push(ages[i])
//   }
// }

// document.getElementById("source1").innerHTML = `${canDrink}`
// console.log(canDrink)

// same thing using filter :

// canDrink = ages.filter(function (age) {
//   if (age >= 21) {
//     return true
//   }
// })

// cleaned up using es6 arrow :

// canDrink = ages.filter(age => age >= 21)

// document.getElementById("source1").innerHTML = `${canDrink}`
// console.log(canDrink)

// filter retail companies:

// const retailCompanies = companies.filter(function (company) {
//   if (company.category === "Retail") {
//     return true
//   }
// })

// const retailCompanies = companies.filter(company => company.category === "Retail")

// console.log(retailCompanies)

// Get 80s companies :

// const eightiesCompanies = companies.filter(company => company.start >= 1980 && company.start < 1990)
// console.log(eightiesCompanies)

// Get companies that lasted 10 years+

// const tenYearCo = companies.filter(company => company.end - company.start >= 10)
// console.log(tenYearCo)

// ============================================

// MAP

// Array of company names

// const companyNames = companies.map(function (company) {
//   return company.name
// })

// console.log(companyNames)

// const companyNames = companies.map(company => company.name)
// console.log(companyNames)

// Array with start to end years:

// const testMap = companies.map(function (company) {
// return `${company.name} [${company.start} - ${company.end}]`

// })

// console.log(testMap)
// document.getElementById("source1").innerHTML = `TESTMAP: ${testMap}`

// NOTE Alt for return line in above example:

// return company.name + " " + "[" + company.start + " - " + company.end + "]"

// same above with es6 arrow:

// const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`)

// console.log(testMap)

// map with ages array:

// Square root of age:

// const agesSquare = ages.map(age => Math.sqrt(age))
// console.log(agesSquare)
// document.getElementById("source1").innerHTML = agesSquare

// Double ages:
// const dblAges = ages.map(age => age * 2)
// console.log(dblAges)
// document.getElementById("source2").innerHTML = dblAges

// Combined last two examples

// const agesSquareDbl = ages.map(age => Math.sqrt(age)).map(age => age * 2)

// console.log(agesSquareDbl)
// document.getElementById("source2").innerHTML = agesSquareDbl

// ============================================

// SORT

// const sortedCompanies = companies.sort(function (c1, c2) {
//   if (c1.start > c2.start) {
//     return 1
//   } else {
//     return -1
//   }
// })

// console.log(sortedCompanies)

// es6 format:

// const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1))
// console.log(sortedCompanies)

// account for single digit numbers:

// const sortAges = ages.sort((a, b) => a - b)
// console.log(sortAges)

// ============================================

// REDUCE

// let ageSum = 0

// for (let i = 0; i < ages.length; i++) {
//   ageSum += ages[i]
// }

// console.log(ageSum)

// let ageSum = ages.reduce((total, age) => total + age, 0)
// console.log(ageSum)

// Get total years for all companies

// const totalYears = companies.reduce(function (total, company) {
//   return total + (company.end - company.start)
// }, 0)

// console.log(totalYears)

// es6 version:

// const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0)
// console.log(totalYears)

// ============================================

// ALL METHODS COMBINED

// const combined = ages
//   .map(age => age * 2)
//   .filter(age => age >= 40)
//   .sort((a, b) => a - b)
//   .reduce((a, b) => a + b, 0)

// console.log(combined)
