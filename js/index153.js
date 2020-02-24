const arithmetic = {
    add: function(add1, add2) {
        sum = add1 + add2
        console.log(sum)
    },
    subtract: function(subtract1, subtract2) {
        result = subtract1 - subtract2
        console.log(result)
    },
    multiply: function(multi1, multi2) {
        resultMulti = multi1 * multi2
        console.log(resultMulti)
    },
    divide: function(number1, number2) {
        resultDivide = number1 / number2
        console.log(resultDivide)
    },
    remainder: function(num1, num2) {
        remains = num1 % num2
        console.log(remains)
    }
}

arithmetic.add(2, 10)
arithmetic.subtract(10, 5)
arithmetic.multiply(3, 100)
arithmetic.divide(40, 2)
arithmetic.remainder(20, 2)