class OrderDTO{
    constructor(order) {
        this.id = order.id;
        this.userid = order.userid;
        this.totalprice = order.totalprice;
        this.createdate = order.createdate;
        this.updatedate = order.updatedate;
        this.orderdate = order.orderdate;
        this.orderstatus = order.orderstatus;
        }
}

module.exports = OrderDTO;