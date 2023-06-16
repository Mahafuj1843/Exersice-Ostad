const mongoose = require('mongoose')

const CartSchema = new mongoose.Schema({
    product:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Product" 
    },
    qty:{
        type: Number,
        require: true,
        default: 1
    },
    user: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User" 
    }
},{timestamps: true, versionKey: false}
)

module.exports = mongoose.model("Cart", CartSchema)