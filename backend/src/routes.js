const express = require('express');

const LiveController = require('./app/controllers/LiveController');
const CategoryController = require('./app/controllers/CategoryController');

const routes = express.Router();

/******************************* LiveController ******************************/

routes.get('/lives', LiveController.index);
routes.post('/lives', LiveController.create);

/******************************* CategoryController ******************************/

routes.get('/categories', CategoryController.index);
routes.post('/categories', CategoryController.create);

module.exports = routes;