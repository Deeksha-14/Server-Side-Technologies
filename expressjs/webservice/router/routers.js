const express = require("express")
const connection = require('../db/dbconnect')
const router = express.Router();

router.get("/employees",(req, resp)=> {
    connection.query("select * from emp",(err,data,fields)=>{
        if(err)
        {
            resp.status(500).send("Data not found"+JSON.stringify(err))
        }else{
            resp.send(data)
        }
    })


}




)




module.exports= router;