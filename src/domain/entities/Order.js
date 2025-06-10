class Order {
  constructor({ id, userid,totalprice,orderdate,orderstatus}) {
    this.id = id;
    this.userid = userid;
    this.totalprice = totalprice;
    this.orderdate = orderdate;
    this.orderstatus = orderstatus; 
   }
}
 
module.exports = Order;