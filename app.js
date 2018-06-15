const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();

const views = require('./views/index');

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send(views.main(''));
});

app.listen(1337, (req, res) => {
  console.log('App connected at Port 1337');
});
