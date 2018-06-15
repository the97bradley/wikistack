const user = require('express').Router();
const views = require('../views/index');

module.exports = user;

user.get('/', (req, res) => {
  res.send(views.main(''));
});
