<<<<<<< HEAD
class OrderDTO{
    constructor(order) {
        this.id = order.id;
        this.userid = order.userid;
        this.totalprice = order.totalprice;
        this.orderdate = order.orderdate;
        this.orderstatus = order.orderstatus;
        }
}

=======
class OrderDTO{
    constructor(order) {
        this.id = order._id;
        this.customerid = order.customerid;
        this.totalprice = order.totalprice;
        this.orderdate = order.orderdate;
        this.orderstatus = order.orderstatus;
        }
}

>>>>>>> 28f00e44f809fcb372e231256c57fde08f60c38e
module.exports = OrderDTO;