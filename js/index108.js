let numbers = function (number1, number2, number3, highToLow) {


    let listAscend = [number1, number2, number3]
    listAscend.sort()
    listAscend.sort((a, b) => a - b)

    let listDescend = [number1, number2, number3]
    listDescend.sort()
    listDescend.sort((a, b) => b - a)


    if (highToLow === true) {
        console.log(listDescend)
    } else if (highToLow === false) {
        console.log(listAscend)
    }
}

numbers(10, 8, 25, true)