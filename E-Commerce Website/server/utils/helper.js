const Coupon = require("../models/Coupon")
const Product = require("../models/Product")

exports.calcTotalRating = async (product) =>{
    const getProduct = await Product.findById(product)
    let totalRating = getProduct.rating.length
    const ratingSum = getProduct.rating.map((i)=> i.star).reduce((prev, curr)=> prev+curr, 0)

    let actualRating = Math.round(ratingSum/totalRating)
    console.log(actualRating)
    await Product.findByIdAndUpdate(product,
        {
            totalrating : actualRating
        }, 
        { new : true})
}

exports.findCoupon = async (coupon) => {
    const result = await Coupon.findOne(
        {
            title: coupon,
            expiresAt: { $gt: Date.now() },
        }
    )
    return result;
}