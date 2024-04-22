const express = require('express');
const mongoose = require('mongoose');
const dbConnection = require('./config/DB');
const cors = require('cors');
const bodyParser = require('body-parser');

const port = 5000;

const authRoutes= require('./')


const authRoutes =require('./routes/authRoutes');
const otpRoutes = require('./routes/otpRoutes');


const app = express();



app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}))
app.use(express.json())



 dbConnection ();

 app.get('/',(req,res)=>{
    res.send("hello raviraj");
    res.end();
 })


 app.use ('/api/auth',authRoutes);


app.listen(port,()=>{
    console.log(`server is running on ${port}`);
})