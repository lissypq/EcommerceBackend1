class OrderDetails {
  constructor({ id,orderid,productid, quantity, unitprice}) {
    this.id = id; 
    this.orderid = orderid;
    this.productid = productid;
    this.quantity = quantity;
    this.unitprice = unitprice;
   
   }
}
 
module.exports = OrderDetails;