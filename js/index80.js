
while(false) {
    console.log('This code doesn\'t get executed');
}

let number = 1;
let sum = 0;



    do {
        sum += number
        number += 2
    } while (number <= 1000 && number >= 0);

    console.log(sum)