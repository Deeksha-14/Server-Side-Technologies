const express = require("express")
const router = express.Router();
const connection = require("../db/dbconnect.js")


router.get("/paint", (req, resp) => {
    connection.query("select * from paint", (err, data) => {
        if (err) {
            resp.send("error in fetch" + JSON.stringify(err))
        } else {
            resp.send(data);
        }
    })
})


// "pid" : 1,
//     "pname" : "red",
//     "pColor" : "red",
//     "price":"10"

//pid autoincrement primary key, pName, pColor, price
router.post("/paint/insert", (req, resp) => {
    var pid = req.body.pid;
    var pName = req.body.pName;
    var pColor = req.body.pColor;
    var price = req.body.price;

    connection.query("insert into paint values(?,?,?,?)", [pid, pName, pColor, price], (err, result) => {
        if (err) {
            resp.send("error in fetching data" + JSON.stringify(err));
        } else {
            resp.status(500).send(result);
        }
    })
}
)


router.delete("/paint/delete/:pid", (req, resp) => {
    var pid = req.params.pid;
    connection.query("delete from paint where pid=?", [pid], (err, result) => {
        if (err) {
            resp.send("data could not be deleted" + JSON.stringify(err));
        } else {
            resp.send("deletion successful");
        }


    })
})


router.put("/paint/update/:pid", (req, resp) => {
    var pid = req.params.pid;
    var pName = req.body.pName;
    connection.query("update paint set pname=? where pid=? ", [pName, pid], (err, result) => {
        if (err) {
            resp.send("err in updation" + JSON.stringify(err));
        } else {
            resp.send("updation successful");
        }
    })
})


router.get("/paint/:pid", (req, resp) => {
    var pid = req.params.pid;
    connection.query("select * from paint where pid=?", [pid], (err, data) => {
        if (err) {
            resp.send("error occurred" + JSON.stringify(err));
        } else {
            resp.status(500).send(data);
        }
    })
})


module.exports = router;