const express = require('express');
const QuestionController = require('./controllers/QuestionController');
const RoomController = require('./controllers/RoomController');

const route = express.Router();

//Comandos para criação da senha
route.get('/', (req, res) => res.render("index", {page: 'enter-room'}));
route.get('/create-pass', (req,res) => res.render("index", {page: 'create-pass'}));

//Comandos para criação da sala
//route.get('/room/:room', (req, res) => res.render("room"))
route.post('/create-room', RoomController.create);
route.get('/room/:room', RoomController.open);
route.post('/enterroom', RoomController.enter);

route.post('/question/create/:room', QuestionController.create);
// Forma que o formulario da modal tem que passar a informação
route.post('/question/:room/:question/:action', QuestionController.index);


module.exports = route;

