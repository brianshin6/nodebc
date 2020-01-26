const firstNumber = 15
const secondNumber = 30
const sum = firstNumber + secondNumber
const subtract = firstNumber - secondNumber
const multiply = firstNumber * secondNumber
const divide = firstNumber / secondNumber
const remainder = secondNumber % firstNumber

let template1 = `I add ${firstNumber} + ${secondNumber} and the result is ${sum}`
let template2 = `I subtract ${firstNumber} - ${secondNumber} and the result is ${subtract}`
let template3 = `I multiply ${firstNumber} * ${secondNumber} and the result is ${multiply}`
let template4 = `I divide ${firstNumber} / ${secondNumber} and the result is ${divide}`
let template5 = `I divide ${secondNumber} % ${firstNumber} and the remainder is ${remainder}`

console.log('I add 15 + 30 and the result is ' + sum)
console.log('I subtract 30 - 15 and the result is ' + subtract)
console.log('I multiply 15 * 30 and the result is ' + multiply)
console.log('I divide 15 / 30 and the result is ' + divide)
console.log('I divide 30 % 15 and the remainder is ' + remainder)

console.log(template1)
console.log(template2)
console.log(template3)
console.log(template4)
console.log(template5)