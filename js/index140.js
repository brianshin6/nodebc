const mutants = ['Professor X', 'Cyclops', 'Iceman', 'Angel', 'Magneto', 'Beast', 'Phoenix', 'Logan', 'Gambit']

const newMutants = mutants.filter(function(newList){
    
     return newList == 'Professor X' ||  newList =='Cyclops' || newList =='Angel' || newList == 'Beast' || newList == 'Phoenix' || newList == 'Logan'
     
     
})

console.log(newMutants)