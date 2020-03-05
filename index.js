
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.use((req, res, next)=>{
  console.log('REQ BODY', req.body);
  console.log('REQ QUERY', req.query);
  console.log('REQ PARAMS', req.params);
  console.log('HEADERS', req.headers);
  next();
})
// TODO # 1: add planets and stars controller
const planets = require('./controllers/planets');
const stars = require('./controllers/stars');

// TODO # 2: make routes to call controller functions
app.get('/', (req, res) => {
  res.send('Hello Spacelings!')
});
// get all planets and stars
app.get('/api/planets', planets.getPlanets)
app.get('/api/stars', stars.getStars);
// get planet by type in query
app.get('/api/planetsType', planets.getPlanetType);
// get planet by id parameter
app.get('/api/planets/:id', planets.getPlanetParams)
// add a star
app.post('/api/stars', stars.addStar);

app.listen(3000, () => {
  console.log('To infinity and beyond!');
});