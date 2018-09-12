var express = require('express');
var purchaseRoutes = express.Router();

// var jwt = require("jsonwebtoken");
// var jwtConfig = require('../config/jwtConfig');

var purchaseController = require('../controllers/purchaseController.js');

// purchaseRoutes.use(function(req, res, next){
//     var token = req.headers.auth;
//     userId = req.headers.userid;
//     userName = req.headers.username;
//     viewId = req.headers.viewid;

//     jwt.verify(token, jwtConfig.secret, function (tokenError) {
//         if (tokenError) {
//             return res.status(403).json({
//                 message: "Invalid token, please Log in first"
//             });
//         }
//         next();
//     });
// });

/*
 * GET
 */
purchaseRoutes.get('/', purchaseController.list);

/*
 * GET
 */
purchaseRoutes.get('/:id', purchaseController.show);

/*
 * POST
 */
purchaseRoutes.post('/', purchaseController.create);

/*
 * PUT
 */
purchaseRoutes.put('/:id', purchaseController.update);

/*
 * DELETE
 */
purchaseRoutes.delete('/:id', purchaseController.remove);

module.exports = purchaseRoutes;
