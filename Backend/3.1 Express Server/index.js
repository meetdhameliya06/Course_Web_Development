import  Express  from "express";
const app = Express();
const port = 3000;

app.listen(port,()=>{
    console.log(`Server has running on ${port}`);
});