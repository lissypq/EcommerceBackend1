<<<<<<< HEAD
const express = require('express');
const router = express.Router();

module.exports = (CartController) => {
  /**
 * @swagger
 * tags:
 *   name: Products
 *   description: Gestión de productos
 */

/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Obtiene todos los productos
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: Lista de productos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 */
  router.get('/', (req, res) => CartController.getAll(req, res));
  router.post('/', (req, res) => CartController.create(req, res));

  return router;
=======
const express = require('express');
const router = express.Router();

module.exports = (CartController) => {
  /**
 * @swagger
 * tags:
 *   name: Carts
 *   description: Gestión de carritos de compras
 */

/**
 * @swagger
 * /api/carts:
 *   get:
 *     summary: Obtiene todos los productos
 *     tags: [Carts]
 *     responses:
 *       200:
 *         description: Lista de Carts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Cart'
 */
  router.get('/', (req, res) => CartController.getAll(req, res));
  router.post('/', (req, res) => CartController.create(req, res));

  return router;
>>>>>>> 28f00e44f809fcb372e231256c57fde08f60c38e
};