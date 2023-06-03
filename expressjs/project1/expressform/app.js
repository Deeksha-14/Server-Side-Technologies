const express=require("express")
const app=express();
const bodyparser=require("body-parser");
const m1= require("./formmodules");

app.use(bodyparser.urlencoded({extended:false}))

app.get("/form", function(req,resp){
    resp.sendFile("./views/form.html",{root:__dirname})
})


app.get("/submit-data", function(req,resp){
    if(req.query.btn === "add")
    {
       var n1 = parseInt(req.query.num1);
       var n2 = parseInt(req.query.num2);
        var ans = m1.add(n1, n2)
        resp.send(`<h1> addition is : ${ans} </h1>`)
    }else{

 var n1 = parseInt(req.query.num1)
       var n2 = parseInt(req.query.num2)
        var ans = m1.mult(n1, n2)
        resp.send(`<h1> multiplication is : ${ans} </h1>`)
    }
})


app.listen(3002,function(){
    console.log("running at port 3002")
})
