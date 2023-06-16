const express = require('express')
const cookieParser = require('cookie-parser')

// Security Middleware Lib Import
const rateLimit =require('express-rate-limit');
const helmet =require('helmet');
const mongoSanitize =require('express-mongo-sanitize');
const xss =require('xss-clean');
const hpp =require('hpp');
const cors =require('cors');

const authRouter = require('./routes/authRoute')
const categoryRouter = require('./routes/categoryRoute')
const productRouter = require('./routes/productRoute')
const brandRouter = require('./routes/brandRoute')
const cartRouter = require('./routes/cartRoute')
// const wishlistRouter = require('./routes/wishlistRouter')
const orderRouter = require('./routes/orderRoute')
// const ratingRouter = require('./routes/ratingRoute')
// const couponRouter = require('./routes/couponRoute')


const app = express()
require('dotenv').config()

app.use(cors())
app.use(helmet())
app.use(mongoSanitize())
app.use(xss())
app.use(hpp())
const limiter= rateLimit({windowMs:15*60*1000,max:3000})
app.use(limiter)
app.use(express.urlencoded({limit: '50mb', extended: true}));
app.use(cookieParser())
app.use(express.json({ limit: '50mb' }))

app.use('/api/auth', authRouter);
app.use('/api/category', categoryRouter);
app.use('/api/product', productRouter);
app.use('/api/brand', brandRouter);
app.use('/api/cart', cartRouter);
// app.use('/api/wishlist', wishlistRouter);
app.use('/api/order', orderRouter);
// app.use('/api/rating', ratingRouter);
// app.use('/api/coupon', couponRouter);

app.use((err, req, res, next)=>{
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something wents wrong."
    return res.status(errorStatus).json({
      success : false,
      status : errorStatus,
      message : errorMessage,
      stack : err.stack,
    });
  });



// Routing Implement

// Undefined Route Implement
app.use("*",(req,res)=>{
    res.status(404).json({status:"fail",data:"Not Found"})
})


module.exports=app;