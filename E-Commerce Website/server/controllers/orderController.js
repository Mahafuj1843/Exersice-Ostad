const Stripe = require("stripe");
const Order = require("../models/Order");
const OrderItems = require("../models/OrderItems");
const Shipping = require("../models/Shipping");
const { orderService } = require("../services/orderService");

exports.intent = async (req, res, next) =>{
    const stripe = new Stripe(process.env.STRIPE_SECRET)

    const totalPrice = req.body.cartItems.map(x => x.price * x.qty).reduce((prev, curr) => prev + curr, 0)
    // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: totalPrice * 100, // not multiply 100 then amount will show in cent not doller
    currency: "usd",
    automatic_payment_methods: {
      enabled: true,
    },
  });
  await orderService(req, Order, OrderItems, Shipping, paymentIntent)

  res.status(200).send({clientSecret: paymentIntent.client_secret})
}

exports.confirmOrder = async (req, res, next) =>{
  try {
    const orders = await Order.findOneAndUpdate(
      { 
        paymentIntent: req.body.payment_intent
      },
      { 
        $set : {
          payment: "Success"
        }
      }, 
      { new : true}
    )
    if(orders) res.status(200).send("Order has been completed.")
    
  } catch (error) {
    next(error)
  }
}


exports.getUserOrder = async (req, res, next) => {
  try {
      const order = await Order.find({orderBy : req.user.id}).sort({createdAt: -1})
      res.status(200).json(order)
  } catch (error) {
      next(error)
  }
}

exports.getAllOrder = async (req, res, next) => {
  try {
      const order = await Order.find().sort("-orderStatus").populate("products.productId")
      res.status(200).json(order)
  } catch (error) {
      next(error)
  }
}
