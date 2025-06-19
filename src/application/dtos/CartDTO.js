<<<<<<< HEAD
class CartDTO{
constructor(Cart) {
    this.id = Cart.id;
    this.items = Cart.items || [];
    this.totalprice = Cart.totalprice || 0;
    this.userid = Cart.userid || null;
    }        
}

=======
class CartDTO{
constructor(Cart) {
    this.id = Cart._id;
    this.items = Cart.items || [];
    this.totalprice = Cart.totalprice || 0;
    this.userid = Cart.userid || null;
    }        
}

>>>>>>> 28f00e44f809fcb372e231256c57fde08f60c38e
module.exports =CartDTO;