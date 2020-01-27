let message = "3.14 it's a great number but 42 it's the answer to life."
let pi = parseFloat(message)
let answerToLife = parseFloat(message.substr(29,2))
let result = pi + answerToLife

console.log('result: ', result)
console.log(result, 'is the result of adding pi and answerToLife')
console.log(result.toString(), 'is the result of adding pi and answerToLife')