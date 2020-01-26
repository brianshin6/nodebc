let firstName = 'Brian'
let lastName = 'Shin'
let nameCharacters = firstName.length
let lastNameCharacters = lastName.length
let charsDiff = nameCharacters - lastNameCharacters

console.log('My first name is ' + firstName + ' and it is ' + nameCharacters + ' characters long.')
console.log('My last name is ' + lastName + ' and it is ' + lastNameCharacters + ' characters long.')
console.log('The character difference between my first name and last name is ' + charsDiff)
console.log('My first name is longer than my last name: ', nameCharacters > lastNameCharacters)