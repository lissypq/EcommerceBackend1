const mongoose = require('../mongoose');
const ObjectID = mongoose.Schema.Types.ObjectId;

const OrderDetailSchema = new mongoose.Schema({
  orderid: { type:ObjectID, required: true, ref: 'Order',trim: true},
  productid: { type:ObjectID, required: true, ref: 'Product',trim: true},
  quantity: { type: Number, required: true, min: 0 },
  unitprice: { type: Number, required: true, min: 0 }, 
}, { timestamps: true });

module.exports = mongoose.model('OrderDetail', OrderDetailSchema);

