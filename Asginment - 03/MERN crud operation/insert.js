const insertData = (MyMongoClient) =>{
    var  DB = MyMongoClient.db('electro_mart');
    var MyCollection = DB.collection('users');
    var myData = {username: 'Mahir', email: 'mahir@gmail.com', password: 123456, isAdmin: 2}

    MyCollection.insertOne(myData, (err)=>{
        if(err)
           console.log("Data insert failled")
        else
           console.log("User add successfull.")
    });
}

module.exports = {insertData}