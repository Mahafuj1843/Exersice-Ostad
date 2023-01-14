const update = (MyMongoClient) =>{
    var  DB = MyMongoClient.db('electro_mart').collection('users');
    var query = {username: "Emon"}
    var newData = {$set: {isAdmin: 0}}

    DB.updateOne(query, newData, (err, data)=>{
        if(err)
           console.log("Data not found. Something err.")
        else
           console.log("Data successfully updated")
    });
}

module.exports = {update}