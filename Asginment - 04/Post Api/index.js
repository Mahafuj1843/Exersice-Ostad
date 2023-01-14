import express from 'express'
import postRoute from './routes/post.js'
import uploadRoute from './routes/file-upload.js'

const app = express()

app.use(express.json())

app.use("/", postRoute);
app.use("/upload", uploadRoute);
// app.get("/", (req, res)=>{
//     res.send("server started.")
// })

app.listen(8800, ()=>{
    console.log("Server started.")
})