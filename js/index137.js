const numbers = []
let sum = 0
for (let i = 0; i <= 1000; i++) {
    numbers.push(i)
}

const numberIncrement = numbers.map(function(number, index, array){
    console.log('incremented value ',number += 10)
    console.log('index ', index)
    console.log('original number ', index)
    
   
})


// numberIncrement.forEach(function(newNumbers, index) {
//     console.log('index ', index + ' incremented value ', newNumbers)
    
// })

