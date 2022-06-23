//core module
// const fs = require('fs')
// const readingFile = fs.readFileSync('./README.txt', 'utf-8')
// console.log(readingFile)

//local module
// const calculator = require("./utils/calculator");
// const addition = calculator.addition(2,3);
// const subtraction = calculator.subtraction(2,3);
// console.log(addition, subtraction)
//kayak gini lebih efektif
// const {addition, subtraction} = require("./utils/calculator")
// console.log(addition(2,3))
// console.log(subtraction(2,3))


//3rd party
const math = require('mathjs')
const add = math.add(8,3)
console.log(add)