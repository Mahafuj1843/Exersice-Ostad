const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title:{
        type: String,
        require: true
    },
    content:{
        type: String,
        require: true
    },
    photo:{
        type: String,
        require: false
    },
    //Author Id
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
  },{timestamps: true, versionKey: false}
  );

module.exports =  mongoose.model("Post", PostSchema)