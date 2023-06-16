const Stripe = require("stripe");
const Order = require("../models/Order");
const OrderItems = require("../models/OrderItems");
const Shipping = require("../models/Shipping");
const { parentChildCreateService } = require("../services/parentChildService");

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

  await parentChildCreateService(req, Order, OrderItems, Shipping, paymentIntent)

  res.status(200).send({clientSecret: paymentIntent.client_secret})
}

exports.confirmOrder = async (req, res, next) =>{
    const stripe = new Stripe(process.env.STRIPE_SECRET)

    const totalPrice = 120
    // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: totalPrice * 100, // not multiply 100 then amount will show in cent not doller
    currency: "usd",
    automatic_payment_methods: {
      enabled: true,
    },
  });
}

exports.createOrder = async (req, res, next) => {
  try {
      const cart = await User.findById(req.user.id, { cart: 1, _id:-1 }).populate("cart.productId")
      if (cart.cart.length) {
          const coupon = await findCoupon(req.body.coupon)
          const cartTotal = cart.cart.map(x => x.productId.price * x.quantity).reduce((prev, curr) => prev + curr, 0)
          let newOrder = await new Order({
              products: cart.cart,
              subTotal: cartTotal,
              discount: {
                  coupon: coupon ? coupon.title : "",
                  discounts: coupon ? coupon.discount : 0
              },
              total: coupon ? (cartTotal - (cartTotal * (coupon.discount / 100))).toFixed(2) : cartTotal,
              orderBy: req.user.id,
              shipping: {
                  fullname: req.body.fullname,
                  phone: req.body.phone,
                  streetAddress: req.body.streetAddress,
                  village: req.body.village,
                  state: req.body.state,
                  city: req.body.city
              }
          }).save()
          if (newOrder) {
              let update = cart.cart.map((item)=>{
                  return{
                      updateOne: {
                          filter: { _id: item.productId._id},
                          update: {$inc: {quantity: -item.quantity, sold: +item.quantity}}
                      }
                  }
              })
              await Product.bulkWrite(update, {})
              await User.findByIdAndUpdate(req.user.id,
                  {
                      cart: []
                  })
              res.status(200).send("Order has been completed.")
          } else return res.status(500).send("Something went wrong.");
      } else {
          return res.status(500).send("Something went wrong.");
      }
  } catch (error) {
      next(error)
  }
}

exports.getUserOrder = async (req, res, next) => {
  try {
      const order = await Order.find({orderBy : req.params.id}).populate("products.productId")
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
