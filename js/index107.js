let biggerNumber = function (firstNumber, secondNumber) {

    let valid = function () {
        if (typeof firstNumber === 'number' && typeof secondNumber === 'number') {
            return true;
        } else {
            console.log("Error, please enter a number!!!")
            return false;
        }
    }
    let validstate = valid()
    if (validstate && firstNumber > secondNumber) {
        console.log("Number " + firstNumber + "is bigger than " + secondNumber)
    } else if (secondNumber > firstNumber) {
        console.log("Number " + secondNumber + "is bigger than " + firstNumber)
    } else if (firstNumber === secondNumber) {
        console.log("Both numbers are " + firstNumber)
    }
}


biggerNumber("a", 5)