import express from "express"
const app = express();
const port = 3000;

app.get("/",(req,res)=>{
    res.send("Hello <h1>meet</h1>")
    // console.log(req.rawHeaders)
})

app.get("/about",(req,res)=>{
    res.send("<h1>About me</h1>")

})
app.get("/contact",(req,res)=>{
    res.send("<h1>Contact</h1><p>Hredsfkjcgbsdzxuvc</p>")
   

})

app.listen(port,()=>{
    console.log(`server running on port ${port}`)
})