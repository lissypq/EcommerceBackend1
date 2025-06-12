class OrderDetailsDTO{
constructor(orderdetails) {
    this.id = orderdetails.id;
    this.orderid = orderdetails.orderid;
    this.productid = orderdetails.productid;
    this.quantity = orderdetails.quantity;
    this.unitprice = orderdetails.unitprice;
    }        
}

module.exports =OrderDetailsDTO;