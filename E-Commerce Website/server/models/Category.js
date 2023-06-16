const mongoose = require('mongoose')

const CategorySchema = new mongoose.Schema({
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
  },{timestamps: true, versionKey: false}
  );

  module.exports = mongoose.model("Category", CategorySchema)