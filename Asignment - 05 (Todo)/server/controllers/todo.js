import Todo from "../models/Todo.js"

export const createTodo = async (req,res)=>{
    const newTodo = new Todo(req.body);

    try{
        const savedTodo = await newTodo.save();
        res.status(200).json(savedTodo);
    }catch(err){
        res.status(401).json(err);
    }
}

export const updateTodo = async (req,res,next) =>{
    try{
        const updatedTodo = await Todo.findByIdAndUpdate(
            req.params.id,
            { $set : req.body}, 
            { new : true});
        res.status(200).json(updatedTodo)
    }catch(err){
        next(err);
    }
}

export const deleteTodo = async (req,res) =>{
    try{
        await Todo.findByIdAndDelete(
            req.params.id,
        );
        res.status(200).json("Todo has been deleted.")
    }catch(err){
        next(err);
    }
}

export const getAllTodo = async (req,res) =>{
    try{
        const todos = await Todo.find();
        res.status(200).json(todos)
    }catch(err){
        next(err)
    }
}

export const doneTodo = async (req,res) =>{
    try{
        const todos = await Todo.find({done : 1});
        res.status(200).json(todos)
    }catch(err){
        next(err)
    }
}
export const pendingTodo = async (req,res) =>{
    try{
        const todos = await Todo.find({done : 0});
        res.status(200).json(todos)
    }catch(err){
        next(err)
    }
}