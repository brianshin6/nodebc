for (let number = 0, sum = 0; number <= 1000 && number >= 0; number ++, sum += number) {
    if(sum <= 400) {
        console.log(sum);
    } else {
        break;
    }
}