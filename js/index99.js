for (let number = 0, sum = 0; number <= 1000 && number >= 0; number +=2, sum += number) {
    if(number <= 39 ) {
        console.log(sum);
    } else {
        break;
    }
}