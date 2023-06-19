const mongoose = require("mongoose");
const Coupon = require("../models/Coupon");
const { findCoupon } = require("../utils/helper");
const Shipping = require("../models/Shipping");

exports.orderService = async (Req, OModel, OIModel, SModel, paymentIndent) =>{

        // Create Transaction Session
        const session = await mongoose.startSession()
    try {
        // Start Transaction
        await session.startTransaction()
	// const cartItems = await CModel.find({user: Req.user.id}).populate('product')
	const cartTotal = Req.body.cartItems.map(x => x.price * x.qty).reduce((prev, curr) => prev + curr, 0)
	// let parent = Req.body.parent
    // let coupon
    // if(Req.query.coupon){
    //     coupon = findCoupon(Req.query.coupon)
    // }

    const newOrder = new OModel({
        subTotal: cartTotal,
        // coupon: "",//coupon ? coupon._id : "",
        // discount: 0,//coupon ? coupon.discount : 0,
        shippingCost: 10,
        // total: coupon ? Number(Req.body.shippingCost) + Number((cartTotal - (cartTotal * (coupon.discount / 100))).toFixed(2))
        //               :
        //               10 + cartTotal,
        total: 10 + cartTotal,
        paymentIntent : paymentIndent.id,
        orderBy: Req.user.id
    })

    let order = await OModel.create([newOrder], {session})
                let cartItems = []
                for(let item of Req.body.cartItems){
                    cartItems = [...cartItems, {order: order[0]._id, product: item._id, qty: item.qty}]
                }
                console.log(cartItems)
                let orderItems = await OIModel.insertMany(cartItems, {session})

                // console.log(Req.body.shipping)
                Req.body.shipping.orderId = order[0]._id
                const createShipping = new SModel(
                    // {
                    Req.body.shipping
                //     orderId: order[0]._id,
                //     firstname: Req.body.shipping.firstname,
                //     lastname: Req.body.shipping.lastname,
                //     email: Req.body.shipping.email,
                //     address: Req.body.shipping.address,
                //     city: Req.body.shipping.city,
                //     zip: Req.body.shipping.zip,
                //     country: Req.body.shipping.country,
                //     phone: Req.body.shipping.phone,
                //     orderNote: Req.body.shipping.note,
                // }
                )
                let shipping
                if(orderItems){
                    shipping = await createShipping.save();
                    // Transaction Success and end
                    await session.commitTransaction()
                    session.endSession()

                    return { Order: order, OrderItems: orderItems, Shipping: shipping}
                }
    } catch (error) {
        //Rollback trancation if catch any error
        await session.abortTransaction()
        session.endSession()
        console.log(error)
        return { status: "fail", data: error.toString()}
    }
}