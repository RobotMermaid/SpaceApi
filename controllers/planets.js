const {planets} = require('../models');

// TODO # A: get request to list all planets
const getPlanets = (res, req, next)=> {
  req.json(planets);
}
//TODO # B: get request using query
// extra: have a fallback in case of no query
const getPlanetType = (res, req, next)=> {
  if (res.query.type) {
    req.json(planets.filter(planet => planet.type === res.query.type));
} else {
    res.json(planets);
}
};
//TODO # C: get request using id param
const getPlanetParams = (req, res, next)=> {
    res.json(planets[req.params.id]);
  };

// export to module
module.exports = {
  getPlanets,
  getPlanetType,
  getPlanetParams
}