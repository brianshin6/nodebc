const express = require('express')
const app = express()
const port = 3000



const requestTime = (req, res, next) => {
    const message = `Request: ${req.baseUrl} ${Date.now()}`;
    console.log(message);
    
    next();
  };

app.use(requestTime)

app.get('/', (request, response) => {
    response.json({
        "status": 200,
        "message": "Este request/response está OK"
      })
})

app.listen(port, function(){
    console.log(`listening on port ${port}`)
})