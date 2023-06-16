const Cart = require("../models/Cart")

exports.addToCart = async (req, res, next) => {
    try {
        const alreadyAdded = await Cart.find({ user: req.user.id, product: req.body.productId })
        if (alreadyAdded.length) return res.status(200).send('Product already added to cart.')
        else {
            const newItem = new Cart({
                product: req.body.productId,
                user: req.user.id
            })
            const item = await newItem.save();
            if(item) return res.status(200).send('Product added to cart.')
            else return res.status(401).send('Something wents wrong.')
        }
    } catch (err) {
        next(err);
    }
}

exports.removeFromCart = async (req, res, next) => {
    try {
        const deleteItem = await Cart.findOneAndDelete({ user: req.user.id, product: req.body.productId })
        if(deleteItem) res.status(200).send("Product remove form cart.")
        else return res.status(401).send('Something wents wrong.')
    } catch (err) {
        next(err);
    }
}

exports.getCart = async (req, res, next) => {
    try {
        let cartProduct = await Cart.find({user: req.user.id}).populate('product')
        res.status(200).json(cartProduct)
    } catch (error) {
        next(error)
    }
}

exports.emptyCart = async (req, res, next) => {
    try {
        const deleteItems = await Cart.deleteMany({user: req.user.id})
        if(deleteItems) res.status(200).send("All product remove from cart.")
        else return res.status(401).send('Something wents wrong.')
    } catch (error) {
        next(error)
    }
}

exports.incrementCartProductQty = async (req, res, next) => {
    try {
        await Cart.updateOne(
            { user: req.user.id, product: req.body.productId },
            {
                $inc: { qty: 1 }
            },
            { new : true}
        )
        res.status(200).send("Product quantity increase.")
    } catch (err) {
        next(err);
    }
}

exports.decrementCartProductQty = async (req, res, next) => {
    try {
        await Cart.updateOne(
            { user: req.user.id, product: req.body.productId },
            {
                $inc: { qty: -1 }
            },
            { new : true}
        )
        res.status(200).send("Product quantity decrease.")
    } catch (err) {
        next(err);
    }
}