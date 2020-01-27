/*Create a new index45.js file
Define a playerName variable with the following value: Patrik Laine is lame
Define a teams variable with the following value: New Jersey Devils, New York Rangers, Winnipeg jets & Pittsburgh Penguins
Define a message variable with the following value: Winnipeg is the best Canadian city, Go Winnipeg
Use the slice method to get the following words or phrases from the previous variables:
Patrik Laine is
jets
the best
, Go
Use a template variable to create the final result
Change the first jets character to be Capitalized
Create all the variables that you might need to accomplish this objective
The final output must be: PATRIK LAINE is the best Jets player, Go Jets!!.*/

let playerName = 'Patrik Laine is lame'
let teams = 'New Jersey Devils, New York Rangers, Winnipeg jets & Pittsburgh Penguins'
let message = 'Winnipeg is the best Canadian city, Go Winnipeg'
let part1 = playerName.slice(0, -4)
let part2 = teams.slice(-26, -22)
let part3 = message.slice(12, 20)
let part4 = message.slice(-13, -9)
let partOne = (part1.slice(0,12).toUpperCase()) + (part1.slice(-4))
let partTwo = (part2.charAt(0).toUpperCase()).concat(part2.slice(1))
let template = `${partOne}${part3} ${partTwo} player${part4} ${partTwo}!!.`
console.log(template)