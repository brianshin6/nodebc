const express = require('express')
const router = express.Router()

router.get('/', function(request, response){
    response.send('Please log to get a user')
})

router.post('/', function(request, response){
    response.send('Please log to create a user')
})

router.put('/', function(request, response){
    response.send('Please log to update a user')
})

router.delete('/', function(request, response){
    response.send('Please log to delete a user')
})


module.exports = router