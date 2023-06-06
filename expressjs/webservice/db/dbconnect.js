const mysql = require("mysql")
const mysqlconnection = mysql.createConnection({
    "host" : "127.0.0.1",
    "user" : "root",
    "password" : "root123",
    "port" : 3306,
    "database" : "prac"




})


mysqlconnection.connect((err)=>{
if(err)
{
console.log("error occured"+JSON.stringify(err));
}else{
console.log("connection established");
}



})

module.exports = mysqlconnection;