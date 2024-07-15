import Express from "express";
const app=Express();
const port=2000;

app.get("/",(req,res)=>{
    // console.log(req,rawHeader);
    res.send("<h1>Hello !, Have a good day</h1>");
});


app.get("/about",(req,res)=>{
    // console.log(req,rawHeader);
    res.send("<h1>About page</h1><h2>My Name Meet Dhameliya</h2><p>Web developer</p>");
});


app.get("/about/contact",(req,res)=>{
    // console.log(req,rawHeader);
    res.send("<h1>Contact Pag</h1><p>E-mail : meetdhameliya@gmail.com</p><p>Phone : 832026****</p>");
    
    
});


app.listen(port,()=>{
    console.log(`server running on port ${port}`);
});
