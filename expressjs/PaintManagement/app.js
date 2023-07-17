const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const routes = require("./router/router.js");

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.use("/", routes)


app.listen(3002, () =>

    console.log("server started at port 3002")
);

module.exports = app;