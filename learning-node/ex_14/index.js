const express = require('express')
const app = express()
const path = require('path')

app.get('/', (request, response, next) => {
    response.status(200).sendFile(path.join(__dirname, 'index.html'))
})

app.get('/products', (request, response, next) => {
    response.status(500).send('Server error, please try again later')
})

app.get('/users', (request, response, next) => {
    response.status(404).sendFile(path.join(__dirname, '404.html'))
})


app.listen(3000, function() {
    console.log('listening on port 3000!');
  })