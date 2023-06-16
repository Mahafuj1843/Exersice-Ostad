const Coupon = require("../models/Coupon")

exports.createCoupon = async (req, res, next) =>{
    try {
        req.body.createBy = req.user.id
        await Coupon.create(req.body);
        res.status(200).send("Coupon create successfully.")
    } catch (error) {
        next(error)
    }
}

exports.getAllCoupons = async (req,res,next) =>{
    try{
        const coupons = await Coupon.find().sort("-createdAt");
        res.status(200).json(coupons)
    }catch(err){
        next(err)
    }
}

exports.getCoupon = async (req,res,next) =>{
    try{
        const coupon = await Coupon.findById(
            req.params.id,
        );
        if(!coupon) return next(createError(404, "Coupon not found."));
        else res.status(200).json(coupon)
    }catch(err){
        next(err);
    }
}

exports.updateCoupon = async (req,res,next) =>{
    try{
        const coupon = await Coupon.findById(
            req.params.id,
        );
        if(!coupon) return next(createError(404, "Coupon not found."));
        else{
            const updatedCoupon = await Coupon.findByIdAndUpdate(
                req.params.id,
                { $set : req.body}, 
                { new : true});
            res.status(200).json(updatedCoupon)
        }
    }catch(err){
        next(err);
    }
}

exports.deleteCoupon = async (req,res,next) =>{
    try{
        const coupon = await Coupon.findById(req.params.id);
        if(!coupon) return next(createError(404, "Coupon not found."));
        else {
            await Coupon.remove();
            res.status(200).json("Coupon has been deleted.")
        }
    }catch(err){
        next(err);
    }
}

exports.applyCoupon = async (req, res, next) => {
    try {
        const result = await findCoupon(req.body.coupon)
        if (!result) return next(createError(404, "Invalid or Expired Token."));
        else {
            const total = (req.body.cartTotal - (req.body.cartTotal * (result.discount / 100))).toFixed(2);
            res.status(200).json({ "isApplied": true, total });
        }
    } catch (error) {
        next(error)
    }
}