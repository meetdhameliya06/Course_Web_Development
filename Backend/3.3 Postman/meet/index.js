import express from "express"
const app = express()
const port = 3090

app.get("/",(req,res)=>{
    res.send("<h1>Hello Server</h1>")
})

app.get("/register",(req,res)=>{
    res.sendStatus(201)
})

app.get("/user/model",(req,res)=>{
    res.sendStatus(200)
})
app.get("/register",(req,res)=>{
    res.sendStatus(201)
})
app.get("/register",(req,res)=>{
    res.sendStatus(201)
})