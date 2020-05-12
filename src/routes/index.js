const mainRoutes = require('express').Router();

const mainController = require('../controllers/index');

mainRoutes.get('/', mainController.saludo);

module.exports = mainRoutes;