import express from "express"

const app = express();
const port = 3000;

app.get("/",(req,res)=>{

    const Student = ["Meet","Raj","Jay"]
    res.render("index.ejs",{
        Person : Student,
    })
})

app.listen(port,()=>{
    console.log(`server running on ${port}`);
    
})