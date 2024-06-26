const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    firstName : {
        type : String,
        required : true,
    },
    lastName : {
        type : String, 
        required : true,
    },
    phoneNumber : {
        type : String,
        required : true,
        unique : true,
    },
    profilePic : String,
    dateJoined : {
        type : Date,
        default : Date.now()
    }
})


const User = mongoose.model('User', userSchema);


module.exports = User;