const express = require("express");
const app=express();
app.get('/',(req,res)=>res.send('Hello Yonas'));
app.listen(3000,()=>{
    console.log('My API is running on port 3000');
})