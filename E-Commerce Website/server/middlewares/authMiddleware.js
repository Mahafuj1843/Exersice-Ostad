const jwt = require('jsonwebtoken')
const { createError } = require('../utils/error')

exports.verifyToken = (req, res, next) =>{
    //const token = req.cookies.access_token;
      const token = req.headers.token;
    if(!token) return next(createError(401, "You are not authenticated."));
    else{
        jwt.verify(token, process.env.JWT,(err, user)=>{
            if(err) return next(createError(403, "Invalid Token."));
            else{
                req.user = user;
                next();
            }
        });
    }
}

exports.verifyUser = (req, res, next) =>{
    if(req.user.id === req.params.id || req.user.isAdmin) {
        next()
    }
    else{
        return next(createError(403, "You are not authorized."));
    }
}

exports.verifyAdmin = (req, res, next) =>{
        if(req.user.isAdmin) {
            next()
        }
        else{
            return next(createError(403, "You are not authorized."));
        }
}