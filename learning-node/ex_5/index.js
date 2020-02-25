const Logger = require('logplease')
const logger = Logger.create('ex5')
let EvenOrOdd = require('./numbers');

let values = [2, 3, 101, 201, 202, 100]
//let numbers = EvenOrOdd(values)



values.forEach(function (value) {
    let numbers = EvenOrOdd(value);
    if (numbers == true) {
        logger.info(`${value} is even`)
    } else if (numbers == false) {
        logger.info(`${value} is odd`)
    }
})



