<<<<<<< HEAD
const express = require('express');
const router = express.Router();

module.exports = (OrderDetailController) => {
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
  router.get('/', (req, res) => OrderDetailController.getAll(req, res));
  router.post('/', (req, res) => OrderDetailController.create(req, res));

  return router;
=======
const express = require('express');
const router = express.Router();

module.exports = (OrderDetailController) => {
  /**
 * @swagger
 * tags:
 *   name: Products
 *   description: Gestión de pedidos
 */

/**
 * @swagger
 * /api/orderdetails:
 *   get:
 *     summary: Obtiene todos los detalle de pedidos
 *     tags: [OrderDetails]
 *     responses:
 *       200:
 *         description: Lista de detalle de pedidos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/OrderDetail'
 */
  router.get('/', (req, res) => OrderDetailController.getAll(req, res));
  router.post('/', (req, res) => OrderDetailController.create(req, res));

  return router;
>>>>>>> 28f00e44f809fcb372e231256c57fde08f60c38e
};