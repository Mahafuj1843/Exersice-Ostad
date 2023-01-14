const insert = require('./insert.js')
const find = require('./find.js')
const deleted = require('./delete')
const update = require('./update')
var MongoClient = require('mongodb').MongoClient;
require('dotenv').config()

var URL = process.env.MONGO;

MongoClient.connect(URL, function(error, MyMongoClient){
    if(error){
        console.log("Connection failed.")
    }else{
        console.log("Connected to MongoDB.");
        insert.insertData(MyMongoClient)
        //find.findData(MyMongoClient)
        //find.findAllData(MyMongoClient)
        // find.findByQuerySort(MyMongoClient)
        // deleted.deleteOne(MyMongoClient)
        // deleted.deleteAll(MyMongoClient)
        // update.update(MyMongoClient)
    } 
});