import express from 'express'
import multer from 'multer'

const router = express.Router();

var storage =  multer.diskStorage( {
    destination: function (req, file, callBack){
        callBack(null, 'Images')
    },
    filename: function(req, file, callBack){
        console.log(file)
        callBack(null, file.originalname)
    }
})

const upload = multer({storage:storage});

router.post("/", upload.single("image"), (req, res, err)=>{
    res.send("File upload successfull.")
})

export default router;