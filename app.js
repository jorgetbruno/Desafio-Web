//Dependências utilizadas
var express = require('express');
var app = express();

//Variavél para identificarqual porta o express deverá utilizar, em uma VM c9 irá utilizar a porta padrão, já em outros ambientes utilizará a porta 3000
var PORT = process.env.PORT !== undefined ? process.env.PORT : 3000;

//Rota para home
app.get('/', function (req, res) {
  res.render('home.ejs');
});

//Rota para um curso determinado
app.get('/curso/:idCurso', function (req, res) {
  res.render('curso.ejs');
});

//Rota para páginas inexistentes
app.get('*', function (req, res) {
  res.send('404 - page not found');
});

//Inicia um socket UNIX para excutar as conexões
app.listen(PORT, function () {
  console.log('It works');
});
