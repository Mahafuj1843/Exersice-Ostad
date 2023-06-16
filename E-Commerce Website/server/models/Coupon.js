const mongoose = require('mongoose');

const CouponSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        unique: true,
        uppercase: true
    },
    discount:{
        type: Number,
        required: true
    },
    expiresAt:{
        type: Date,
        required: true,
    },
    createBy:{
        type: mongoose.Schema.Types.ObjectId,
         ref: "User" 
    }
  },{timestamps: true, versionKey: false}
  );

  module.exports=mongoose.model("Coupon", CouponSchema)