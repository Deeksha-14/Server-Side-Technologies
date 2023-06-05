const express = require("express");
const app=express();
const bodyparser = require("body-parser");
var path=require("path");
const routes=require("./router/routers");


app.use(bodyparser.urlencoded({extended:false}))

app.set("views", path.join(__dirname,"views")) //views path
app.set("view engine", "ejs")

app.set(express.static(path.join(__dirname,"public")))  //public folder path

app.use("/",routes)

app.listen(3002)

module.exports=app;
