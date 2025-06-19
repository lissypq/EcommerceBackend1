<<<<<<< HEAD
const CreateOrder = require('../../application/useCases/CreateOrder');
const OrderDTO = require('../../application/dtos/OrderDTO');
 
class OrderController {
  constructor(OrderRepository) {
    this.CreateOrder = new CreateOrder(OrderRepository);
  }
 
  async create(req, res) {
    try {
      const order = await this.CreateOrder.execute(req.body);
      res.status(201).json(new OrderDTO(order));
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }



  async getAll(req, res) {
    try {
      const orders = await this.OrderRepository.getAll();
      res.status(200).json(orders);
    } catch (err) {
      res.status(500).json({ message: 'Error retrieving orders' });
    }
  }
}
 
module.exports = OrderController;
=======
const CreateOrder = require('../../application/useCases/CreateOrder');
const OrderDTO = require('../../application/dtos/OrderDTO');
 
class OrderController {
  constructor(OrderRepository) {
    this.CreateOrder = new CreateOrder(OrderRepository);
  }
 
  async create(req, res) {
    try {
      const order = await this.CreateOrder.execute(req.body);
      res.status(201).json(new OrderDTO(order));
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }



  async getAll(req, res) {
    try {
      const orders = await OrderModel.find();
      res.status(200).json(orders);
    } catch (err) {
      res.status(500).json({ message: 'Error retrieving orders' });
    }
  }
}
 
module.exports = OrderController;
>>>>>>> 28f00e44f809fcb372e231256c57fde08f60c38e
