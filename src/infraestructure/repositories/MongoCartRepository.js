const CartRepository = require('../../domain/repositories/CartRepository');
const CartModel = require('../database/models/CartModel');
const Cart = require('../../domain/entities/Cart');

class MongoCartRepository extends CartRepository {
  async getAll() {
    const carts = await CartModel.find();
    return Cart.map(c => new Cart(c.toObject()));
  }

  async create(cart) {
    const newCart = await CartModel.create(cart);
    return new Cart(newCart.toObject());
  }



  async getById(id) {
    const cart = await CartModel.findById(id);
    if (!cart) {
      return null;
    }
    return new Cart(cart.toObject());
    }
    
 
  }
>>>>>>> 28f00e44f809fcb372e231256c57fde08f60c38e
module.exports = MongoCartRepository;
