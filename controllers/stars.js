const {stars} = require('../models');

// TODO # D: endpoint to list all stars
const getStars = (res, req, next)=> {
  req.json(stars);
}
// TODO # E: endpoint to add a star
const addStar = (req, res, next)=>{
  stars.push(req.body);
  res.json(stars);
};
  
//export to module
module.exports = {
  getStars,
  addStar
}