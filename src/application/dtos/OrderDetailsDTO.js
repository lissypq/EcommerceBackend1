<<<<<<< HEAD
class OrderDetailsDTO{
constructor(orderdetails) {
    this.id = orderdetails.id;
    this.orderid = orderdetails.orderid;
    this.productid = orderdetails.productid;
    this.quantity = orderdetails.quantity;
    this.unitprice = orderdetails.unitprice;
    }        
}

=======
class OrderDetailsDTO{
constructor(orderdetails) {
    this.id = orderdetails._id;
    this.orderid = orderdetails.orderid;
    this.productid = orderdetails.productid;
    this.quantity = orderdetails.quantity;
    this.unitprice = orderdetails.unitprice;
    }        
}

>>>>>>> 28f00e44f809fcb372e231256c57fde08f60c38e
module.exports =OrderDetailsDTO;