const mutants = ['Professor X', 'Cyclops', 'Iceman', 'Angel', 'Magneto', 'Beast', 'Phoenix', 'Logan', 'Gambit']

mutants.forEach(function(mutantsList) {
    if (mutants.indexOf('Magneto') > -1) {
        return false;
    }
    console.log(mutantsList);
})



console.log(mutants.indexOf('Magneto'))

mutants.splice(4,1)

mutants.forEach(function(newMutantsList, index) {
    console.log('item position: ', index)
    console.log(newMutantsList.toUpperCase())
    
})






