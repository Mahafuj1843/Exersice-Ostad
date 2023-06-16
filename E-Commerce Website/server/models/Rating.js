const mongoose = require('mongoose')

const RetingSchema = new mongoose.Schema({
    star:{
        type: Number,
        require: true,
        enum: [1, 2, 3, 4, 5]
    },
    review:{
        type: String,
        require: true
    },
    postedBy: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User" 
    },
    product:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Product" 
    }
},{timestamps: true, versionKey: false}
)

module.exports = mongoose.model("Rating", RetingSchema)