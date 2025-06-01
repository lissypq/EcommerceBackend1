class Order {
  constructor({ id, userid,totalprice,createdate,updatedate,orderdate,orderstatus}) {
    this.id = id;
    this.userid = userid;
    this.totalprice = totalprice;
    this.createdate = createdate;
    this.updatedate = updatedate;
    this.orderdate = orderdate;
    this.orderstatus = orderstatus; 
   }
}
 
module.exports = Order;