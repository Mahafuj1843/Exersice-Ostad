

// export const addToWishlist = async (req, res, next) => {
//     try {
//         const user = await User.findById(req.user.id)
//         const alreadyAdded = user.wishlist.find((id) => id.toString() === req.body.product)
//         if (alreadyAdded) {
//             await User.findByIdAndUpdate(req.user.id, {
//                 $pull: { wishlist: req.body.product },
//             });
//             res.status(200).send("Prduct remove from wishlist.")
//         } else {
//             await User.findByIdAndUpdate(req.user.id, {
//                 $push: { wishlist: req.body.product },
//             });
//             res.status(200).send("Prduct added in wishlist.")
//         }
//     } catch (err) {
//         next(err);
//     }
// }

// exports.removeFromWishlist = async (req, res, next) => {
//     try {
//         await User.findByIdAndUpdate(req.user.id,
//             {
//                 $pull: { cart: { "productId": req.body.product } },
//             }, { new: true })
//         res.status(200).send("Product remove form cart.")
//     } catch (err) {
//         next(err);
//     }
// }

// exports.emptyWishlist = async (req, res, next) => {
//     try {
//         await User.findByIdAndUpdate(req.user.id,
//             {
//                 cart: []
//             })
//         res.status(200).send("All product remove from cart.")
//     } catch (error) {
//         next(error)
//     }
// }

// export const getWishList = async (req, res, next) => {
//     try {
//         const wishlist = await User.findById(req.user.id, { wishlist: 1 }).populate('wishlist')
//         res.status(200).json(wishlist)
//     } catch (error) {
//         next(error)
//     }
// }