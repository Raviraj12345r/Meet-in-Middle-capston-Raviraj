
const User = require("../models/User");

const signup = async(req,res) => {
    try{

        const {firstName, lastName, phoneNumber, profilePic} = req.body;

        //Condition : 1
        if(!firstName || !lastName || !phoneNumber){
            return res.json({message : "Please Fill all the fileds"});
        }

        User.findOne({phoneNumber : phoneNumber})
        .then((foundUser) => {
            if(foundUser){
                return res.json({error : "Phone Number is already registered"});
            }else{
             

                const newUser = new User({firstName, lastName, phoneNumber, profilePic});

                newUser.save()
                .then(() => {
                    res.json({message : "User Saved Successfully..."})
                }).catch((error) =>{
                    res.json({message : "Error While saving user..",error})
                })
            }
        })
        .catch((error) => {
            res.json({message  : "Error While Finding User...",error})
        })

    }catch(error){
        return res.status(500).json({error : error.message});
    }
}


const signin = async(req, res) => {

    const {phoneNumber} = req.body;

    //Condition 1 -: 
    if(!phoneNumber){
        return res.json({error : "Please Fill all the fields..."})
    }

    try{

        const response = await User.findOne({phoneNumber : phoneNumber});


        if(!response){
            return res.json({error : true})
        }else{
            return res.json({message : "Login Successfully..."})
        }

    }catch(error){
       return res.json({error : "Error while signin user...",error})
    }

}

module.exports = {signup, signin};