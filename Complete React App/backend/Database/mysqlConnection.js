const mysql = require("mysql");

const connection = mysql.createConnection({
    host:"localhost",
    user:"Swapnil",
    password:"Swapnil@99",
    port:"3306" ,
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
