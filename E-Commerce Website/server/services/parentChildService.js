const mongoose = require("mongoose");
const Coupon = require("../models/Coupon");
const { findCoupon } = require("../utils/helper");
const Shipping = require("../models/Shipping");

exports.parentChildCreateService = async (Req, PModel, CModel, OIModel) =>{

        // Create Transaction Session
        const session = await mongoose.startSession()
    try {
        // Start Transaction
        await session.startTransaction()
	const cartItems = await CModel.find({user: Req.user.id}).populate('product')
	const cartTotal = cartItems.map(x => x.product.price * x.qty).reduce((prev, curr) => prev + curr, 0)
	// let parent = Req.body.parent
    let coupon
    if(Req.query.coupon){
        coupon = findCoupon(Req.query.coupon)
    }

    const newOrder = new PModel({
        subTotal: cartTotal,
        coupon: coupon ? coupon._id : "",
        discount: coupon ? coupon.discount : 0,
        shippingCost: Req.body.shippingCost,
        total: coupon ? Number(Req.body.shippingCost) + Number((cartTotal - (cartTotal * (coupon.discount / 100))).toFixed(2))
                      :
                      Number(Req.body.shippingCost) + cartTotal,
        paymentIntent : "p12_12334455",
        orderBy: Req.user.id
    })

    let order = await PModel.create([newOrder], {session})

                await cartItems.map((e)=>{
                    e[order] = order[0]._id
                })
                let orderItems = await OIModel.insertMany(cart, {session})
                
                Req.body.orderId = order[0]._id
                const createShipping = new Shipping(Req.body)

                if(orderItems){
                    const shipping = await createShipping.save();
                    // Transaction Success and end
                    await session.commitTransaction()
                    session.endSession()

                    return { status: 'success', Order: order, OrderItems: orderItems, Shipping: shipping}
                }
    } catch (error) {
        //Rollback trancation if catch any error
        await session.abortTransaction()
        session.endSession()
        return { status: "fail", data: error.toString()}
    }
}