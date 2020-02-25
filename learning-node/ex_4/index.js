const oneLinerJoke = require('one-liner-joke')
let randomJoke = oneLinerJoke.getRandomJoke({'exclude_tags': ['christian', 'racist']})
console.log(randomJoke)