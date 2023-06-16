const cloudinary = require('cloudinary')
const fs = require('fs')

let add = () =>{
  cloudinary.v2.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.API_KEY, 
    api_secret: process.env.API_SECRET 
  });
}

exports.cloudinaryUploadImg = async (path, folder) =>{
  add()
  const result = await cloudinary.v2.uploader.upload(path, {folder: folder})
  return result
}

exports.cloudinaryDeleteImg = async (publicId) =>{
  add()
  await cloudinary.v2.uploader.destroy(publicId)
}


exports.productImageUpload = async (file, folder) =>{
  const result = await this.cloudinaryUploadImg(file.path, folder)
  let urls = { url: result.secure_url, publicId: result.public_id}
  fs.unlink(file.path, (err)=>{
        if(err) next(err);
  });
    return urls;
}

// exports.productImageUpload = async (files, folder) =>{
//   const urls = []
//         for(let file of files){
//             const result = await cloudinaryUploadImg(file.path, folder)
//             urls.push({ url: result.secure_url, publicId: result.public_id})
//             fs.unlink(file.path, (err)=>{
//                  if(err) next(err);
//              });
//         }
//     return urls;
// }

