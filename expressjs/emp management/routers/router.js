const express = require("express")
const router = express.Router();//
const connection = require("../db/dbconnect.js")


router.get("/emp", (req, resp) => {
    connection.query("select * from emp", (err, data) => {
        if (err) {
            resp.send("error in fetching the list" + JSON.stringify(err));
        } else {
            resp.send(data);
        }
    })
})




router.post("/emp", (req, resp) => {
    var empno = req.body.EMPNO;
    var ename = req.body.ENAME;
    var job = req.body.JOB;
    var mgr = req.body.MGR;
    var hdate = req.body.HIREDATE;
    var sal = req.body.SAL;
    var com = req.body.COMM;
    var deptno = req.body.DEPTNO;
    connection.query("insert into emp values(?,?,?,?,?,?,?,?)", [empno, ename, job, mgr, hdate, sal, com, deptno], (err, result) => {
        if (err) {
            resp.status(500).send("error in insertion" + JSON.stringify(err));
        } else {
            resp.send(result);
        }
    });
})



router.put("/emp/:EMPNO", (req, resp) => {
    var empno = req.body.EMPNO;
    var ename = req.body.ENAME;
    connection.query("update emp set ENAME = ? where EMPNO=?", [ename, empno], (err, result) => {
        if (err) {
            resp.status(500).send("error in updation" + JSON.stringify(err));

        } else {
            resp.send(result);
        }



    })
})


router.delete("/emp/:EMPNO", (req, resp) => {
    var empno = req.params.EMPNO;
    connection.query("delete from emp where EMPNO=?", [empno], (err, result) => {
        if (err) {
            resp.status(500).send("error in deletion" + JSON.stringify(err));
        } else {
            resp.send("emp deleted");
        }
    })
})

router.get("/emp/:EMPNO", (req, resp) => {
    var empno = req.params.EMPNO;
    connection.query("select * from emp where EMPNO=?", [empno], (err, data) => {
        if (err) {
            resp.status(500).send("error in fetching emp" + JSON.stringify(err));
        } else {
            resp.send(data);
        }
    })
})


module.exports = router;