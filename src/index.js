const express = require('express');
const config = require('./config');
console.log('>>> Config leída:', config);
const MongoProductRepository = require('./infraestructure/repositories/MongoProductRepository');

const ProductController = require('./adapters/controllers/ProductController');
const productRoutes = require('./adapters/routes/productRoutes');
const OrderDetailController = require('./adapters/controllers/OrderDetailController');
const orderdetailRoutes = require('./adapters/routes/orderdetailRoutes');
const OrderController = require('./adapters/controllers/OrderController');
const orderRoutes = require('./adapters/routes/orderRoutes');
const CartController = require('./adapters/controllers/CartController');
const cartRoutes = require('./adapters/routes/cartRoutes');

const { verifyToken } = require('./adapters/middlewares/authJwt');


const app = express();
const port = config.port;

// Dependencies
const dbType = config.DB_TYPE || 'mongodb'; // 'mongo' o 'mysql'
let productRepository;

  productRepository = new MongoProductRepository();



const productController = new ProductController(productRepository);

/// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
 
// Routes
app.use('/api/v1/products', verifyToken, productRoutes(productController));
 
// Error Handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong on the server!' });
});
 
// Start Server
app.listen(port, () => {
  console.log(`E-commerce server running on port ${port}`);
});