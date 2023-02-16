const express = require('express')
const app = express()
const port = 3001 || process.env.port
const router = require("./Routes/usercreate")
const server = require('./connections/connection')
const cors = require('cors')
app.use(cors())

app.use(router)
server() ;
app.get("/",(req,res)=>{

    res.send("hello check ")

})





app.listen(port,()=> console.log(`Server is up at ${port}`)) ;