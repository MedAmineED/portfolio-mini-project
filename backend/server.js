const express = require('express')
const myDb = require("./config/db")
const app = express()
const route = require("./routes/router")
const cors = require('cors');


app.use(express.json());
app.use(cors());

// Middleware to parse URL-encoded form bodies
app.use(express.urlencoded({ extended: true }));



// app.get('/', (req, res)=>{
//     res.send("i am woe")
// })

app.use(route) 


app.listen(3002, ()=> {
    console.log("server is running")
})