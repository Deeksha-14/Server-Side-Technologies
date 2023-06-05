const express = require("express")
const router = express.Router();
const connection = require("../db/dbconnect")

router.get("/employee",function(req, resp){
    
    
    
    resp.send("hi there")
    resp.end()
})


module.exports=router;
