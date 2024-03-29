const jwt = require('jsonwebtoken')

const { createError } = require('../utils/error')

exports.verifyToken = (req, res, next) =>{
    // const token = req.headers.token;
    const token = req.cookies.access_token
    if(!token) return next(createError(401, "You are not authenticated."));
    else{
        jwt.verify(token, process.env.JWT, (err, user)=>{
            if(err) return next(403, "Token is not valid.")
            else{
                req.user = user;
                next();
            }
        })
    }
}
