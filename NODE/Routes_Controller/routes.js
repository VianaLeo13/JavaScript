const express = require('express');
const route = express.Router();
const homeController = require('./controller/HomeController');
const contatoController = require('./controller/ContatoController');


route.get('/', homeController.paginaInicial);
route.post('/submit', homeController.trataPost);

//contato routes:

route.get('/contato', contatoController.contato);


module.exports = route;