let mongoose = require('mongoose');


async function dbConnection(){
    try{

       await mongoose.connect('mongodb://localhost:27017/mitm');
       console.log("Database Connected Successfully...");

    }catch(error){

        console.log("Error While Connecting Database....",error);

    }
}

module.exports = dbConnection;