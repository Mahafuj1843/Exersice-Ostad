const deleteOne = (MyMongoClient) =>{
    var  DB = MyMongoClient.db('electro_mart').collection('users');
    var deleteItem = {username: "Emon"}

    DB.deleteOne(deleteItem, (err)=>{
        if(err)
           console.log("Data not found. Something err.")
        else
           console.log("Data has been deleted.")
    });
}

const deleteAll = (MyMongoClient) =>{
    var  DB = MyMongoClient.db('electro_mart').collection('users');

    DB.deleteMany((err)=>{
        if(err)
           console.log("Data not found. Something err.")
        else
           console.log("Data has been deleted.")
    });
}

module.exports = {deleteOne, deleteAll}
