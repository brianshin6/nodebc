const numbers = []
for (let i = 1000; i >= 1; i--) {
    numbers.push(i)
}

let evenNumbers = numbers.filter(function(even) {
    return even % 2 == 0;
})
console.log(evenNumbers)
console.log(evenNumbers.slice(0, 20))

let oddNumbers = numbers.filter(function(odd){
    return odd % 2 !== 0;
})

console.log(oddNumbers)
console.log(oddNumbers.slice(490, 500))

