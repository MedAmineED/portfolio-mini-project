const mySql = require('mysql');


const db = mySql.createPool({
    host : "localhost",
    user : "root",
    password : '',
    database : "portfolio",
}); 

db.getConnection((err, connect)=> {
    if(connect){
            console.log("connect to db succusffly")
            }
    else {
        console.log(err)
    }
})

module.exports = db