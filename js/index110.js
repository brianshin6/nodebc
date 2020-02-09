let average = function (number1, number2, number3, number4, number5) {
    
    let list = [number1, number2, number3, number4, number5]
    
    let sum = (number1 + number2 + number3 + number4 + number5)

    let numberOfNumbers = list.length

    let mean = sum / numberOfNumbers

    console.log('The average is ' + mean)
     

    }

    average (2, 4, 10, 20, 30)