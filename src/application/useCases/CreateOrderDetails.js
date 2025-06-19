const orderdetails = require('../../domain/entities/OrderDetails');
 
class CreateOrderdetails {
  constructor(orderDetailsRepository) {
    this.orderDetailsRepository = orderDetailsRepository;
  }
 
  async execute(orderData) {
    const orderdetails = new orderdetails(orderData);
    return await this.orderDetailsRepository.create(orderdetails);
  }
}
 
module.exports = CreateOrderdetails;