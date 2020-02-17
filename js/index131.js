const femaleStudents = ['Mary', 'Beth', 'Jane', 'Sarah', 'Julie']
const maleStudents = ['Brian', 'John', 'Kevin', 'Michael', 'Justin']
const students = femaleStudents.concat(maleStudents) 
let length = students.length
let lengthMale = maleStudents.length

for (i = 0; i < length; i++) {
    console.log(students[i])
}

console.log(femaleStudents[0], femaleStudents[1], femaleStudents[2], femaleStudents[3], femaleStudents[4])

let number = 0;
while (number < lengthMale) {
    console.log(maleStudents[number])
    number ++;
    
}

