const mongoose = require('../mongoose');
const ObjectID = mongoose.Schema.Types.ObjectId

const cartSchema = new mongoose.Schema({
    items: [{ productid: {type: ObjectID, ref: 'Product', required: true },
        name: String,  required: true     }],
  totalpriceprice: { type: Number, required: true, min: 0 },
  userid: { type: ObjectID, required: true, ref: 'User',trim: true },
}, { timestamps: true });
     
  
module.exports = mongoose.model('Cart', cartSchema);

