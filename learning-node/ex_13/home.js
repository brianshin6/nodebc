const express = require('express')
const router = express.Router()

router.get('/', function(request, response) {
    response.send('This is my home page using Express Router')
})

module.exports = router