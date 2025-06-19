<<<<<<< HEAD
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
 
=======
const Orderdetails = require('../../domain/entities/OrderDetails');
 
class CreateOrderdetails {
  constructor(orderDetailsRepository) {
    this.orderDetailsRepository = orderDetailsRepository;
  }
 
  async execute(orderDatails) {
    const orderdetails = new Orderdetails(orderDatails);
    return await this.orderDetailsRepository.create(orderdetails);
  }
}
 
>>>>>>> 28f00e44f809fcb372e231256c57fde08f60c38e
module.exports = CreateOrderdetails;