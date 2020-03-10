const express = require('express')
const app = express()

const home = require('./home.js');
const user = require('./user.js');

app.use('/', home);
app.use('/user', user);


app.listen(3000, function() {
    console.log('listening on port 3000!');
  });