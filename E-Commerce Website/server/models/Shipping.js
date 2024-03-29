const mongoose = require('mongoose')

const ShippingSchema = new mongoose.Schema({
    orderId:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Order",
        required: true,
    },
    firstname:{
        type: String,
        required: true,
    },
    lastname:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    address:{
        type: String,
        require: true,
    },
    city:{
        type: String,
        require: true
    },
    zip:{
        type: Number,
        require: true
    },
    country:{
        type: String,
        require: true
    },
    phone:{
        type: Number,
        require: true
    },
    orderNote:{
        type: String
    }
},{timestamps: true, versionKey: false}
)

module.exports = mongoose.model("Shipping", ShippingSchema)