let tripExpenses = [100, 1000, 500]
let result = tripExpenses.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
});

console.log(`hotel: ${tripExpenses[0]}, trip: ${tripExpenses[1]}, meals: ${tripExpenses[2]}`)
console.log(`Total trip budget: ${result}`)