const fs = require('fs')
const Product = require("../models/Product")
const { createError } = require("../utils/error");
const { cloudinaryDeleteImg, productImageUpload } = require("../utils/cloudinary");

exports.createProduct = async (req, res, next) => {
    try {
        var newProduct = new Product({
            title: req.body.title,
            sku: req.body.sku,
            desc: req.body.desc,
            originalPrice: req.body.originalPrice,
            price: req.body.price,
            quantity: req.body.quantity,
            category: req.body.category,
            brand: req.body.brand,
            image : await productImageUpload(req.file, `e-commerce/product`)
        });
        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct);
    } catch (err) {
        next(err);
    }
}

exports.getAllProduct = async (req, res, next) => {
    try {
        const products = await Product.find().populate('category brand').sort("-createdAt");
        res.status(200).json(products)
    } catch (err) {
        next(err)
    }
}

exports.getProduct = async (req, res, next) => {
    try {
        const product = await Product.findById(
            req.params.id,
        );
        if (!product) return next(createError(404, "Product not found."));
        else res.status(200).json(product)
    } catch (err) {
        next(err);
    }
}

exports.updateProduct = async (req, res, next) => {
    try {
        const product = await Product.findById(
            req.params.id,
        );
        if (!product) return next(createError(404, "Product not found."));
        else {
            if(req.file){
                await cloudinaryDeleteImg(product.image.publicId)
                req.body.image = await productImageUpload(req.file, `e-commerce/product`);
            }
            const updatedProduct = await Product.findByIdAndUpdate(
                req.params.id,
                { $set: req.body },
                { new: true });
            res.status(200).json(updatedProduct)
        }
    } catch (err) {
        next(err);
    }
}

exports.getProductDetails = async (req, res, next) => {
    try {
        const product = await Product.findById(req.params.id).populate('category brand');
        if (!product) return next(createError(404, "Product not found."));
        else {
            res.status(200).json(product)
        }
    } catch (err) {
        next(err);
    }
}

exports.deleteProduct = async (req, res, next) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return next(createError(404, "Product not found."));
        else {
            await cloudinaryDeleteImg(product.image.publicId)
            await product.remove();
            res.status(200).json("Product has been deleted.")
        }
    } catch (err) {
        next(err);
    }
}

// exports.filterProduct = async (req, res, next) => {
//     try {
//         const page = req.query.page ? req.query.page : 1;
//         const perPage = req.query.perPage ? req.query.perPage : 1;
//         const args = {}
//         if (req.query.brand) args.brand = req.query.brand
//         if (req.query.price) {
//             const sortBy = req.query.price.split(",")
//             args.price = { $gte: sortBy[0], $lte: sortBy[1] };
//         }
//         const products = await Product.find(args).skip((page - 1) * perPage).limit(perPage).sort(req.query.sort)
//         res.status(200).json(products)
//     } catch (err) {
//         next(err)
//     }
// }

