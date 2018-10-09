var express = require('express');
const request = require('request');
var app = express();

app.get('/', function (req, res) {
  res.render('home.ejs');
});

app.get('/curso/:idCurso', function (req, res) {

  res.render('curso.ejs');
});

app.get('*', function (req, res) {
  res.send('404 - page not found');
});

app.listen(process.env.PORT, function () {
  console.log('It works');
});
