const mongoose = require('mongoose')

mongoose.set('strictQuery', false);

exports.connected = async () =>{
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("connect to MongoDB.")
      } catch (error) {
        throw error
      }
};

mongoose.connection.on("disconnected", ()=>{
    console.log("MongoDB disconnected")
})