<<<<<<< HEAD
const CreateCart = require('../../application/useCases/CreateCart');
const CartDTO = require('../../application/dtos/CartDTO');
 
class CartController {
  constructor(CartRepository) {
    this.CreateCart = new CreateOrder(CartRepository);
  }
 
  async create(req, res) {
    try {
      const cart = await this.CreateCart.execute(req.body);
      res.status(201).json(new CartDTO(cart));
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }



  async getAll(req, res) {
    try {
      const carts = await this.CartRepository.getAll();
      res.status(200).json(carts);
    } catch (err) {
      res.status(500).json({ message: 'Error retrieving carts' });
    }
  }
}
 
module.exports = CartController;
=======
const CreateCart = require('../../application/useCases/CreateCart');
const CartDTO = require('../../application/dtos/CartDTO');
const CartModel = require('../../infraestructure/database/models/CartModel');
 
class CartController {
  constructor(cartRepository) {
    this.createCart = new CreateCart(cartRepository);
  }
 
   async create(req, res) {
    try {
      console.log('>>> Request body:', req.body);
      const cart = await this.createCart.execute(req.body);
      res.status(201).json(new CartDTO(cart));
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async getAll(req, res) {
    try {
      const carts = await CartModel.find();
      res.status(200).json(carts);
    } catch (err) {
      res.status(500).json({ message: 'Error retrievingk products' });
    }
  }

  async getAllById(req, res) {
    try {
      const cart = await this.cartRepository.getById(req.params.id);
      if (!cart) {
        return res.status(404).json({ message: 'cart not found' });
      }
      res.status(200).json(cart);
    } catch (err) {
      res.status(500).json({ message: 'Error retrieving cart' });
    }
  }
  
  


 
}
 
module.exports = CartController;
>>>>>>> 28f00e44f809fcb372e231256c57fde08f60c38e
