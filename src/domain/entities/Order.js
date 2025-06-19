<<<<<<< HEAD
class Order {
  constructor({ id, userid,totalprice,orderdate,orderstatus}) {
    this.id = id;
    this.userid = userid;
    this.totalprice = totalprice;
    this.orderdate = orderdate;
    this.orderstatus = orderstatus; 
   }
}
 
=======
class Order {
  constructor({ customerid,totalprice,orderdate,orderstatus}) {
    this.customerid = customerid;
    this.totalprice = totalprice;
    this.orderdate = orderdate;
    this.orderstatus = orderstatus; 
   }
}
 
>>>>>>> 28f00e44f809fcb372e231256c57fde08f60c38e
module.exports = Order;