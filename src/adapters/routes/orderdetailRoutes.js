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
};