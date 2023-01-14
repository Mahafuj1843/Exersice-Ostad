import express from 'express'
import multer from 'multer'

const router = express.Router();

router.post("/body", (req, res)=>{
    res.send("Username : "+req.body.username+"\n isAdmin : "+req.body.isAdmin);
})

router.post("/query", (req, res)=>{
    let username = req.query.username
    let isAdmin = req.query.isAdmin

    res.send("Username : "+ username + "\nisAdmin : " + isAdmin)
})

router.post("/header", (req, res)=>{
    let username = req.header('username')
    let isAdmin = req.header('isAdmin')

    res.send("Username : "+ username + "\nisAdmin : " + isAdmin)
})

router.get("/download", (req, res)=>{
    res.download('./Images/CG_M-1.png')
})

export default router;