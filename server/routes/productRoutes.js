var express = require('express');
var productRoutes = express.Router();
var productController = require('../controllers/productController.js');

/*
 * GET
 */
productRoutes.get('/', productController.list);

/*
 * GET
 */
productRoutes.get('/:id', productController.show);

/*
 * POST
 */
productRoutes.post('/', productController.create);

/*
 * PUT
 */
productRoutes.put('/:id', productController.update);

/*
 * DELETE
 */
productRoutes.delete('/:id', productController.remove);

module.exports = productRoutes;
