const mainRoutes = require('express').Router();

const mainController = require('../controllers/index');

mainRoutes.get('/', mainController.saludo);
mainRoutes.post('/upload', mainController.llenarFormularioPago);

module.exports = mainRoutes;