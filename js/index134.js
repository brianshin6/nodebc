// Iterate over the numbers array and add all numbers items
// On each iteration show the partial result
// 1
// 3
// 6
// ... so on
// If the final result equals 500500 then show the following output: Good job!!!
// Else show: Take a look to see if something is wrong


const numbers = []
let sum = 0
for (let i = 0; i <= 1000; i++) {
    numbers.push(i)
}

for(let i = 0; i < numbers.length; i++) {
sum += numbers[i]
console.log(sum)
}

if (sum == 500500) {
    console.log('Good job!!!')
} else {
    console.log('Take a look to see if something is wrong..')
}





// let sum = numbers.reduce(function(accumulator, currentValue){
//     return accumulator + currentValue
// })
// console.log(sum)