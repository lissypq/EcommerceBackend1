<<<<<<< HEAD
const OrderRepository = require('../../domain/repositories/OrderRepository');
const OrderModel = require('../database/models/OrderModel');
const Order = require('../../domain/entities/Order');

class MongoOrderRepository extends MongoOrderRepository {
  async getAll() {
    const order = await OrderModel.find();
    return order.map(o => new Order(o.toObject()));
  }

  async create(order) {
    const newOrder = await OrderModel.create(order);
    return new Order(newOrder.toObject());
  }



  async getById(id) {
    const order = await OrderModel.findById(id);
    if (!order) {
      return null;
    }
    return new Order(order.toObject());
    }
    
 
  }
=======
const OrderRepository = require('../../domain/repositories/OrderRepository');
const OrderModel = require('../database/models/OrderModel');
const Order = require('../../domain/entities/Order');

class MongoOrderRepository extends OrderRepository {

  async getAll() {
    // Obtiene todos los pedidos de la base de datos
        const newOrder = await OrderModel.find().lean().exec();
        return newOrder.map(orders => new Order(newOrder));
  }

  async create(order) {
    const newOrder = await OrderModel.create(order);
    return new Order(newOrder.toObject());
  }


  async getById(id) {
   return OrderModel.findOne({ _id: id }).lean().exec()
    }

  
     
    
 
  }
>>>>>>> 28f00e44f809fcb372e231256c57fde08f60c38e
module.exports = MongoOrderRepository;