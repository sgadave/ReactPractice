const express = require("express");
const app = express();
const mySQLCon = require("./Database/mysqlConnection");
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("<h1>Hello Express</h1>");
});

//IT WILL GET USER DATA FROM DATA BASE
app.get('/user/data', (req, res) => {
    mySQLCon.query("Select * from user", (err, result) => {
        if (err) {
            console.log("---------ERROR---------");
            console.log(err);
            console.log("----------Err---------");
        } else {
            res.json(result);
        }
    })
});


app.post('/adduser', (req, res) => {
    console.log("Im AddUser");
    console.log(req.body);
    let user = req.body;
    // console.log("UserName:"+user.fname);
    let sqlQuery = `INSERT INTO user VALUES ("${user.fname}","${user.lname}","${user.email}","${user.password}")`
    console.log(sqlQuery);
    mySQLCon.query(sqlQuery, (err, result) => {
        if (err) {
            console.log("---------ERROR---------");
            console.log(err);
            console.log("----------Err---------");
        } else {
            console.log("RESULT");
            console.log(JSON.stringify(result));
            res.json(result);
        }
    })
})

app.get('/userbyid/:userid', (req, res) => {
    console.log("Im userbyid");
    console.log("User Id" + req.params.userid);
    let userid = req.params.userid;
    console.log("UserName:" + userid.fname);
    let sqlQuery = `Select * from user where FirstName="${userid}"`
    console.log(sqlQuery);
    mySQLCon.query(sqlQuery, (err, result) => {
        if (err) {
            console.log("---------ERROR---------");
            console.log(err);
            console.log("----------Err---------");
        } else {
            console.log("RESULT");
            console.log(JSON.stringify(result));
            res.json(result);
        }
    })
})


app.put('/updateuser', (req, res) => {
    mySQLCon.query("Select * from user", (err, result) => {
        if (err) {
            console.log("---------ERROR---------");
            console.log(err);
            console.log("----------Err---------");
        } else {
            res.json(result);
        }
    })
})


app.listen(4000);
console.log("Server at 4000");
