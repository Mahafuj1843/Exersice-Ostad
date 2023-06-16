const Product = require("../models/Product")
const Rating = require("../models/Rating")
const { createError } = require("../utils/error");

// exports.rating = async (req, res, next) => {
//     try {
//         const product = await Product.findById(req.body.product)
//         let alreadyRated = product.rating.find((prod) => prod.postedBy.toString() === req.user.id.toString())
//         if(alreadyRated){
//             await Product.updateOne(
//                 {
//                     rating : {$elemMatch : alreadyRated},
//                 },
//                 {
//                     $set : {
//                         "rating.$.star" : req.body.star,
//                         "rating.$.review" : req.body.review,
//                         "rating.$.date" : Date.now()
//                     }
//                 }
//             )
//         calcTotalRating(req.body.product)
//         return res.status(200).send("Product rating update.")
//         }else{
//             await Product.findByIdAndUpdate(req.body.product,
//                 {$push : 
//                     {rating : {
//                         star : req.body.star,
//                         review : req.body.review,
//                         date : Date.now(),
//                         postedBy : req.user.id
//                     }
//                 }
//             }, { new : true} )
//         calcTotalRating(req.body.product)
//         return res.status(200).send("Product rated successfully.")
//         }
//     } catch (error) {
//         next(error)
//     }
// }

