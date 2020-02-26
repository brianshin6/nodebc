let Greeter = require('./greeter');

function callBack() {
    console.log(`We're using node modules, YEAH!`)
}

Greeter('Brian', 'Shin', callBack)