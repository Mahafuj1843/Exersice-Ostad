const fs = require('fs')
const Brand = require('../models/Brand');
const { createError } = require("../utils/error");

exports.createBrand = async (req,res,next)=>{
    try{
        var newBrand = new Brand({
            title : req.body.title,
            desc : req.body.desc,
            //image : req.file.path
        });
        const savedBrand = await newBrand.save();
        res.status(200).json(savedBrand);
    }catch(err){
        next(err);
    }
}

exports.getAllBrand = async (req,res,next) =>{
    try{
        const brands = await Brand.find().sort("-createdAt");
        res.status(200).json(brands)
    }catch(err){
        next(err)
    }
}

exports.getBrand = async (req,res,next) =>{
    try{
        const brand = await Brand.findById(
            req.params.id,
        );
        if(!brand) return next(createError(404, "Brand not found."));
        else res.status(200).json(brand)
    }catch(err){
        next(err);
    }
}

exports.updateBrand = async (req,res,next) =>{
    try{
        const brand = await Brand.findById(
            req.params.id,
        );
        if(!brand) return next(createError(404, "Brand not found."));
        else{
            // if(req.file){
            //     fs.unlink(Brand.image, (err)=>{
            //         if(err) next(err);
            //     });
            //     req.body.image = req.file.path;
            // }
            const updatedBrand = await Brand.findByIdAndUpdate(
                req.params.id,
                { $set : req.body}, 
                { new : true});
            res.status(200).json(updatedBrand)
        }
    }catch(err){
        next(err);
    }
}

exports.deleteBrand = async (req,res,next) =>{
    try{
        const brand = await Brand.findById(req.params.id);
        if(!brand) return next(createError(404, "Brand not found."));
        else {
            // fs.unlink(Brand.image, (err)=>{
            //     if(err) next(err);
            // });
            await brand.remove();
            res.status(200).json("Brand has been deleted.")
        }
    }catch(err){
        next(err);
    }
}

// exports.list = async (req, res, next) => {
//     try{
//         const brands = await Brand.find().populate("category", "title -_id").select("category").sort("-createdAt");
//         console.log(brands)
//         res.status(200).json(brands)
//     }catch(err){
//         next(err)
//     }
  //};