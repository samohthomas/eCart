var express = require('express');
var cartRoutes = express.Router();
var cartController = require('../controllers/cartController.js');

/*
 * GET
 */
cartRoutes.get('/', cartController.list);

/*
 * GET
 */
cartRoutes.get('/:id', cartController.show);

/*
 * POST
 */
cartRoutes.post('/', cartController.create);

/*
 * PUT
 */
cartRoutes.put('/:id', cartController.update);

/*
 * DELETE
 */
cartRoutes.delete('/:id', cartController.remove);

module.exports = cartRoutes;
