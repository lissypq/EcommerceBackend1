class OrderDetails {
  constructor({ id,orderid,productid, quantity, unitprice,createdate, updatedate }) {
    this.id = id; 
    this.orderid = orderid;
    this.productid = productid;
    this.quantity = quantity;
    this.unitprice = unitprice;
    this.createdate = createdate;
    this.updatedate = updatedate;
   }
}
 
module.exports = OrderDetails;