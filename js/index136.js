// Iterate over each mutants item using forEach
// The objective is to create a string value with Iceman, Logan and Phoenix
// To create the string you need to get the names while iterating the mutants array
// Once the iteration is over show the generated string with the selected mutants names




let mutants = ['Professor X', 'Cyclops', 'Iceman', 'Angel', 'Magneto', 'Beast', 'Phoenix', 'Logan', 'Gambit']
var selected=[];
mutants.forEach(function(mutant){
    if(mutant=='Iceman' || mutant == 'Logan' || mutant =='Phoenix') {
        selected.push(mutant);
    }
})


console.log(selected.toString())