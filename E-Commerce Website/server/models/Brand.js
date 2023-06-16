const mongoose = require('mongoose');

const BrandSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    desc:{
        type: String,
        required: true
    },
    image:{
        url: String,
        publicId: String
    }
  },{timestamps: true}
  );

  module.exports= mongoose.model("Brand", BrandSchema)