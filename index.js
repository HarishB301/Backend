const express = require('express')
const dotenv=require("dotenv")
const app =express()

const port = 8000 || process.env.PORT

app.get("/",(req,res)=>{
    res.send(`<h1>Server running on the Port Number ${port}</h1>`)
})

app.listen(port,(req,res)=>{
    console.log("Server Started....");
})