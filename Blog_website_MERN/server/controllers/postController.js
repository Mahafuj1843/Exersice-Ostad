const { createError } = require("../utils/error");
const Post = require("../models/Post");

exports.createPost = async (req, res, next) =>{
    if (!req.body.title || !req.body.content )
        return next(createError(401, "Please fill the all requried fields."));
    try{
        req.body.userId = req.user.id
        const newPost = new Post(req.body);
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    }catch(err){
        next(err);
    }
}

exports.deletePost = async (req,res,next) =>{
    try{
        const post = await Post.findById({_id:req.params.id, userId:req.user.id});
        if(!post) return next(createError(404, "Post not found."));
        else {
            await post.remove();
            res.status(200).send("Post has been deleted.")
        }
    }catch(err){
        next(err);
    }
}

exports.updatePost = async (req,res,next) =>{
    try{
        const post = await Post.findById({_id:req.params.id, userId:req.user.id});
        if(!post) return next(createError(404, "Post not found."));
        else{
            const updatedPost = await Post.findByIdAndUpdate(
                {_id:req.params.id, userId:req.user.id},
                { $set : req.body}, 
                { new : true});
            if(updatedPost) res.status(200).send(updatedPost)
            else return next(createError(404, "Something wents wrong."));
        }
    }catch(err){
        next(err);
    }
}

exports.getAllPost = async (req,res,next) =>{
    try{
        const posts = await Post.find().sort("-createdAt").populate("userId");
        res.status(200).send(posts)
    }catch(err){
        next(err)
    }
}

exports.getMyAllPost = async (req,res,next) =>{
    try{
        const posts = await Post.find({userId:req.user.id}).sort("-createdAt").populate("userId");
        if(!posts) return next(createError(404, "Post not found."));
        else res.status(200).send(posts)
    }catch(err){
        next(err)
    }
}

exports.getPost = async (req,res,next) =>{
    try{
        const post = await Post.findById(
            req.params.id,
        ).populate("userId");
        if(!post) return next(createError(404, "Post not found."));
        else res.status(200).send(post)
    }catch(err){
        next(err);
    }
}