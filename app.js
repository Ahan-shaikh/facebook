const express = require("express");
const authRoutes =  require("./authRoutes")

const app = express();
app.set('view engine','ejs')
app.use('/',authRoutes);





app.listen(3000,()=>{
    console.log("Port is listening on 3000")
})