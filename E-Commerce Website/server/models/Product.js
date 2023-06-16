const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        trim: true
    },
    sku:{
        type: String,
        required: true,
        unique: true
    },
    desc:{
        type: String,
        required: true
    },
    originalPrice:{
        type: Number
    },
    price:{
        type: Number,
        required: true
    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Category",
    },
    brand:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Brand",
    },
    quantity:{
        type: Number,
        required: true
    },
    sold:{
        type: Number,
        default: 0
    },
    image:{
        url: String,
        publicId: String
    },
    color:{
        type: String,
        colors: ["Black", "White", "Red", "Blue", "Navy Blue", "Green", "Brown", "Ash", "Pink"]
    },
    totalrating: {
        type: Number,
        default: 0
    }
  },{timestamps: true, versionKey: false}
  );

  module.exports = mongoose.model("Product", ProductSchema)