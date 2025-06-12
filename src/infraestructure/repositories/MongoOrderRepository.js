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
module.exports = MongoOrderRepository;