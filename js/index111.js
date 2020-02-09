
let number = [2, 5, 3, 24, 12]
number.forEach (even);

function even(number) {
      
        if (number % 2 === 0) {
            console.log(number + ' is even')
            return true;
        } else if ( number % 2 === 1) {
            console.log(number + ' is odd')
            return false; }
        
    }

even (number)