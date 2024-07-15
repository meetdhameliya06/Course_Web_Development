import express from "express"
const app = express();
const port = 3030;

app.get("/",(req,res)=>{
    res.send("Hello, Meet")
})
app.listen(port,()=>{
    console.log(`server runnung on port ${port}`)
    // alert("Hello")
})