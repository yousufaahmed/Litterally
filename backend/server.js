const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

app.listen(9000, 
function check(err)
{
    if(err){
        console.log(err);
    } else {
        console.log("Success");
    }
});

mongoose.connect("mongodb://localhost:27017", {useNewUrlParser:true, useUnifiedTopology:true},
function checkDB(err)
{
    if(err){
        console.log(err);
    } else {
        console.log("Success");
    }
});