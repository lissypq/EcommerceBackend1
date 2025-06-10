const OrderDetailsRepository = require('../../domain/repositories/OrderDetailsRepository');
const OrderDetailModel = require('../database/models/OrderDetailModel');
const OrderDetails = require('../../domain/entities/OrderDetails');

class MongoOrderDetailsRepository extends MongoOrderDetailsRepository {
  async getAll() {
    const orderdetails = await OrderDetailModel.find();
    return orderdetails.map(od => new Order(od.toObject()));
  }

  async create(orderdetails) {
    const newOrderDetails = await OrderDetailModel.create(orderdetails);
    return new Order(newOrderDetails.toObject());
  }



  async getById(id) {
    const orderdetails = await OrderDetailModel.findById(id);
    if (!orderdetails) {
      return null;
    }
    return new orderdetails(orderdetails.toObject());
    }
    
 
  }
module.exports = MongoOrderDetailsRepository;