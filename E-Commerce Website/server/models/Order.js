const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema({
    subTotal:{
        type:Number,
        require: true
    },
    // coupon:{
    //     type: String,
    //     // ref: "Coupon",
    //     default: ""
    // },
    // discount:{
    //     type:Number,
    //     default: 0
    // },
    shippingCost:{
        type:Number,
        require: true
    },
    total:{
        type:Number,
        require: true
    },
    orderStatus:{
        type: String,
        default: "Pending",
        enum: [ "Pending", "Processing", "Canceled", "Shipping", "Delivered" ]
    },
    paymentIntent: {
        type: String,
    },
    payment: {
        type: String,
        default: "Incomplete",
        enum: [ "Incomplete", "Success", "Failed" ]
    },
    orderDate:{
        type: Date,
        default: new Date()
    },
    deliveryDate: {
        type: Date
    },
    orderBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }
},{timestamps: true, versionKey: false}
)

module.exports = mongoose.model("Order", OrderSchema)