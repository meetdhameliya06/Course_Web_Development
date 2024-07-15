import express from "express";

const port = 3000;
const app = express();

app.get("/",(req,res)=>{
    const data = {
        title : "EJS Tags",
        second : new Date().getSeconds(),
        items :["Apple","Bannana","Cherry"],
        htmlcontent : "<em>THis is some text.</em>"
    }
    res.render("index.ejs",data);
})

app.listen(port,()=>{
    console.log(`Server running on ${port}`);
})