// Sort the list
// Reverse the sorted list
// Join all mutants name using the following text: '* '
// Show the following output:
// Original mutants list
// Sorted mutants list
// Reversed mutants list
// Mutants name separated by *


const mutants = ['Professor X', 'Cyclops', 'Iceman', 'Angel', 'Beast', 'Phoenix']
console.log(mutants)

const sortedMutants = mutants.sort()
console.log(sortedMutants)

const reversedMutants = mutants.reverse()
console.log(reversedMutants)

const joinedMutantsByStar = mutants.join(' * ')
console.log(joinedMutantsByStar)