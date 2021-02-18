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

// BASIC FOR LOOP :

// for (let i = 0; i < companies.length; i++) {
//   console.log(companies)
// }

// FOR EACH:

// companies.forEach(function (company) {
//   console.log(company.name)
// })

// FILTER:

// w/ for loop :

// let canDrink = []

// for (let i = 0; i < ages.length; i++) {
//   if (ages[i] >= 21) {
//     canDrink.push(ages[i])
//   }
// }

// console.log(canDrink)

// using filter

// const canDrink = ages.filter(function (age) {
//   if (age >= 21) {
//     return true
//   }
// })

// console.log(canDrink)

// cleaner, using es6 arrow:

// const canDrink = ages.filter(age => age >= 21)

// console.log(canDrink)

// filter retail companies:

// const retailCompanies = companies.filter(function (company) {
//   if (company.category === "Retail") {
//     return true
//   }
// })

// es6 format

// const retailCompanies = companies.filter(company => company.category === "Retail")

// console.log(retailCompanies)

// get eighties companies

// const eightiesCo = companies.filter(function (company) {
//   if (company.start >= 1980 && company.start < 1990) {
//     return true
//   }
// })
// console.log(eightiesCo)
// console.group(eightiesCo)

// const eightiesCompanies = companies.filter(company => company.start >= 1980 && company.start < 1990)

// console.log(eightiesCompanies)

// Companies that stayed in buisness for 10 years or more:

// const tenYearCo = companies.filter(function (company) {
//   if (company.end - company.start >= 10) {
//     return true
//   }
// })

// console.log(tenYearCo)

// const decadeCo = companies.filter(company => company.end - company.start >= 10)
// console.log(decadeCo)

// ==========

// MAP

// returns new array

// create array of company names

// const companyNames = companies.map(function (company) {
//   return company.name
// })

// console.log(companyNames)

// const companyName = companies.map(company => company.name)
// console.log(companyName)

// const testMap = companies.map(function (company) {
//   return `${company.name} has been in business for ${company.end - company.start} years.`
// })

// console.log(testMap)

// const testMap2 = companies.map(company => `${company.name} has been in business for ${company.end - company.start} years.`)
// console.log(testMap2)

// ages

// const agesSquare = ages.map(function (age) {
//   return Math.sqrt(age)
// })

// console.log(agesSquare)

// const agesSquare = ages.map(age => Math.sqrt(age))

// console.log(agesSquare)

// combined:

// const dblSqAge = ages.map(age => Math.sqrt(age)).map(age => age * 2)

// console.log(dblSqAge)

// ==========

// SORT

// const sortedCompanies = companies.sort(function (companyA, companyB) {
//   if (companyA.start > companyB.start) {
//     return 1
//   } else {
//     return -1
//   }
// })

// console.log(sortedCompanies)

// es6 format:

// const sortedCo = companies.sort((companyA, companyB) => (companyA.start > companyB.start ? 1 : -1))

// console.log(sortedCo)

// sort ages
// const sortAges = ages.sort((a, b) => a - b)
// account for single digit nums!

// console.log(sortAges)

// ==========

// REDUCE

// with for loop:
// let ageSum = 0
// for (let i = 0; i < ages.length; i++) {
//   ageSum += ages[i]
// }

// console.log(ageSum)

// const ageSum = ages.reduce(function (total, age) {
//   return total + age
// }, 0)

// console.log(ageSum)

// es6 format:

// const ageSum = ages.reduce((total, age) => total + age, 0)
// console.log(ageSum)

// const totalYears = companies.reduce(function (total, company) {
//   return total + (company.end - company.start)
// }, 0)

// console.log(totalYears)

// const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0)

// console.log(totalYears)

// const combined = ages
//   .map(age => age * 2)
//   .filter(age => age >= 40)
//   .sort((a, b) => a - b)
//   .reduce((a, b) => a + b, 0)

// console.log(combined)
