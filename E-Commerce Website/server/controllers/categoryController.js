const fs = require('fs')
const Category = require('../models/Category');
const { createError } = require("../utils/error");

exports.createCategory = async (req,res,next)=>{
    try{
        var newCategory = new Category({
            title : req.body.title,
            desc : req.body.desc,
            //image : req.file.path
        });
        const savedCategory = await newCategory.save();
        res.status(200).json(savedCategory);
    }catch(err){
        next(err);
    }
}

exports.getAllCategory = async (req,res,next) =>{
    try{
        const Categorys = await Category.find({}, {desc:0, createdAt:0, updatedAt:0});
        res.status(200).json(Categorys)
    }catch(err){
        next(err)
    }
}

exports.getCategory = async (req,res,next) =>{
    try{
        const category = await Category.findById(
            req.params.id,
        );
        if(!category) return next(createError(404, "Category not found."));
        else res.status(200).json(category)
    }catch(err){
        next(err);
    }
}

exports.updateCategory = async (req,res,next) =>{
    try{
        const category = await Category.findById(
            req.params.id,
        );
        if(!category) return next(createError(404, "Category not found."));
        else{
            // if(req.file){
            //     fs.unlink(Category.image, (err)=>{
            //         if(err) next(err);
            //     });
            //     req.body.image = req.file.path;
            // }
            const updatedCategory = await Category.findByIdAndUpdate(
                req.params.id,
                { $set : req.body}, 
                { new : true});
            res.status(200).json(updatedCategory)
        }
    }catch(err){
        next(err);
    }
}

exports.deleteCategory = async (req,res,next) =>{
    try{
        const category = await Category.findById(req.params.id);
        if(!category) return next(createError(404, "Category not found."));
        else {
            // fs.unlink(Category.image, (err)=>{
            //     if(err) next(err);
            // });
            await category.remove();
            res.status(200).json("Category has been deleted.")
        }
    }catch(err){
        next(err);
    }
}