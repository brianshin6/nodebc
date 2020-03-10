const express = require('express')
const app = express()
port = 3000

app.use('/assets', express.static('public'))
app.use('/assets', express.static('ex_16'))

app.listen(port, function(){
    console.log(`listening on port ${port}`)
})