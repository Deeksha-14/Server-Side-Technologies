const mysql = require("mysql");

var mysqlconnection = mysql.createConnection({

    host: "127.0.0.1",
    user: "root",
    password: "root123",
    port: 3306,
    database: "react"

})

mysqlconnection.connect((err) => {
    if (err) {
        console.log("err in connection" + JSON.stringify(err))
    } else {
        console.log("connection estbalished")
    }
}


)

module.exports = mysqlconnection;