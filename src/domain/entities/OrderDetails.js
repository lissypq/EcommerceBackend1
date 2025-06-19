<<<<<<< HEAD
class OrderDetails {
  constructor({ id,orderid,productid, quantity, unitprice}) {
    this.id = id; 
    this.orderid = orderid;
    this.productid = productid;
    this.quantity = quantity;
    this.unitprice = unitprice;
   
   }
}
 
=======
class OrderDetails {
  constructor({ orderid,productid, quantity, unitprice}) {
     this.orderid = orderid;
    this.productid = productid;
    this.quantity = quantity;
    this.unitprice = unitprice;
   
   }
}
 
>>>>>>> 28f00e44f809fcb372e231256c57fde08f60c38e
module.exports = OrderDetails;