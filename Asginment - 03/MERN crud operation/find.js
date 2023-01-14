const findData = (MyMongoClient) =>{
    var  DB = MyMongoClient.db('electro_mart');
    var MyCollection = DB.collection('users');
    var find = {isAdmin: 1}

    MyCollection.findOne(find, (err, data)=>{
        if(err)
           console.log("Data not found. Something err.")
        else
           console.log(data)
    });
}

const findAllData = (MyMongoClient) =>{
    var  DB = MyMongoClient.db('electro_mart');
    var MyCollection = DB.collection('users');

    MyCollection.find().toArray((err, data)=>{
        if(err)
           console.log("Data not found. Something err.")
        else
           console.log(data)
    });
}

const findByQuerySort = (MyMongoClient) =>{
    var  DB = MyMongoClient.db('electro_mart').collection('users');
    var sortPattan = {isAdmin: 1}

    DB.find().sort(sortPattan).toArray((err, data)=>{
        if(err)
           console.log("Data not found. Something err.")
        else
           console.log(data)
    });
}

module.exports = {findData, findAllData, findByQuerySort}