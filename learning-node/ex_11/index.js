const express = require('express');
const app = express();
const path = require('path');

app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname, 'index.html'))
  })

  app.get('/products', function(request, response) {
    response.sendFile(path.join(__dirname, 'products.html'))
  })

app.listen(3000, function() {
    console.log('listening on port 3000!');
  });