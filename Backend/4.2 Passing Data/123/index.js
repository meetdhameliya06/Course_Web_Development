import express from "express";
import bodyParser from "body-parser";

const port = 3000;
const app = express();

app.use(bodyParser.urlencoded({extended : true}));

app.get("/",(req,res)=>{
    res.render("index.ejs")
})

app.post("/submit",(req,res)=>{
    const count = req.body["fname"].length + req.body["lname"].length;
    
    res.render("index.ejs",{
        countNumber : count
    })
    

})

app.listen(port,()=>{
    console.log(`Server is runnig on ${port}`);
})