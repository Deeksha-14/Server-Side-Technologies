const express = require("express")
const app = express(); 
const router = require("./routers/router.js")
const bodyparser = require("body-parser");

app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json());

app.use("/", router);

app.listen(3002, () => {
    console.log("server is up and running at port 3002")
})

module.exports = app;