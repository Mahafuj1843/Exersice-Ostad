import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import postRoute from './routes/post.js'

const app = express()
dotenv.config()

mongoose.set('strictQuery', false);

const connect = async () =>{
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("connect to MongoDB.")
      } catch (error) {
        throw error
      }
};
app.use(express.json())

app.use("/", postRoute);

app.listen(8800, ()=>{
    connect()
    console.log("Server started.")
})