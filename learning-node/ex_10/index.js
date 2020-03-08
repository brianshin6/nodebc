const express = require('express');
const app = express();
const oneLinerJoke = require('one-liner-joke')
let randomJoke = oneLinerJoke.getRandomJoke()


// configure the default route and send a text as response
app.get('/', function(request, response) {
    response.send('Welcome Home!');
  });
  //
  app.get('/joke', function(request, response) {
      response.send(randomJoke.body)
  })
  //
  app.get('/jokes', function(request, response) {
      let joke1 = oneLinerJoke.getRandomJoke()
      let joke2 = oneLinerJoke.getRandomJoke({
          'exclude_tags': ['dirty']})
      let both = {joke1, joke2}
      response.send(both)
  })
  //
  app.post('/joke', function(request, response) {
      response.send('my jokes are too funny, I\'m not getting new ones from you')
  })
  //
  app.put('/joke', (request, response) => {
      response.send('no..no..no.. not changing my act dude!')
  })
 app.delete('/joke', (request, response) => {
     response.send('good jokes never get too old!')
 })

 app.all('/joke', (request, response) => {
     response.send('I know I\'m so good, that you\'re looking for jokes everywhere!')
 })
  // configure the port that express is going to listen to
  app.listen(3000, function() {
    console.log('listening on port 3000!');
  });