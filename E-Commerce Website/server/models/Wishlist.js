const mongoose = require('mongoose')

const WishlistSchema = new mongoose.Schema({
    product:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Product" 
    },
    user: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User" 
    }
},{timestamps: true, versionKey: false}
)

module.exports = mongoose.model("Wishlist", WishlistSchema)