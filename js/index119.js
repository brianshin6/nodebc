const data = [42, true, function() {return 'The meaning of life is: '}];

let life = data[2]
if (data[1] == true) {
     console.log(life() + data[0])
}