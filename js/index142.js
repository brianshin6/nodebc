let firstPerson = ['Brian', 'Shin', '1008 Gilroy', 29]
let secondPerson = ['Brian', 'Shin', '1008 Gilroy', 29]

const person1 = firstPerson.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
});

const person2 = secondPerson.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
});

if (person1 == person2) {
    console.log('They are the same person')
} else {
    console.log('They are 2 different people')
}


