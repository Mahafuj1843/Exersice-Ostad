const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const rateLimit = require('express-rate-limit')
const helmet = require('helmet')
const mongoSanitize = require('express-mongo-sanitize')
const xss = require('xss-clean')
const hpp = require('hpp')

const authRouter = require('./routes/auth.js')

const app = express()
dotenv.config()

app.use(cors())
app.use(helmet())
app.use(mongoSanitize())
app.use(xss())
app.use(hpp())
const limiter= rateLimit({windowMs:15*60*1000,max:3000})
app.use(limiter)
app.use(express.urlencoded({limit: '50mb', extended: true}));
app.use(cookieParser())
app.use(express.json({ limit: '10mb' }))

app.use('/api/auth', authRouter);

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

module.exports=app;