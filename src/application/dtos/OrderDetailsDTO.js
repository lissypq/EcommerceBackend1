class OrderDetailsDTO{
constructor(orderdetails) {
    this.id = orderdetails.id;
    this.orderid = orderdetails.orderid;
    this.productid = orderdetails.productid;
    this.quantity = orderdetails.quantity;
    this.unitprice = orderdetails.unitprice;
    this.createdate = orderdetails.createdate;
    this.updatedate = orderdetails.updatedate;
    }        
}
export default OrderDetailsDTO;