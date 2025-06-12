const order = require('../../domain/entities/Order');
 
class CreateOrder {
  constructor(orderRepository) {
    this.orderRepository = orderRepository;
  }
 
  async execute(orderData) {
    const order = new order(orderData);
    return await this.orderRepository.create(order);
  }
}
 
module.exports = CreateOrder;