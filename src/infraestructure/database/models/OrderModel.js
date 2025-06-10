const mongoose = require('../mongoose');
const ObjectID = mongoose.Schema.Types.ObjectId


const orderSchema = new mongoose.Schema({
userid: { type: ObjectID, required: true, ref: 'User', trim: true },
totalprice: { type: Number, required: true, min: 0 },
orderdate: { type: Date, required: true},
orderstatus: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);

