const mysql = require("mysql");

const connection = mysql.createConnection({
    host:"localhost",
    user:"reactcurd",
    password:"root123",
    port:"3307" ,
    database:"reactcurd"
})

const con = connection.connect((err)=>{
    if(err){
        console.log("---------ERROR---------");
        console.log(err);
        console.log("----------Err---------");
    }else{
        console.log("connected to mySQL");
    }
});

module.exports=connection;
