class Cart {
  constructor({ id, items, totalprice,userid }) {
    this.id = id;
    this.items = items || [];
    this.totalprice = totalprice || 0;
    this.userid = userid || null;
   }
}
 
module.exports = Cart;