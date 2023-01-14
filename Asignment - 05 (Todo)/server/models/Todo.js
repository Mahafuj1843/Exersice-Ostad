import mongoose from 'mongoose';
//const { Schema } = mongoose;

const TodoSchema = new mongoose.Schema({
    itemName:{
        type: String,
        required: true
    },
    done:{
        type: Boolean,
        default: false
    },
  },
  {
    timestamps: true
  }
  );

  export default mongoose.model("Todo", TodoSchema)