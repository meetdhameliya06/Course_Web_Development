import axios from "axios";
import express from "express";
import bodyParser from "body-parser";


const app = express();
const port = 3000;
const API_URL="https://secrets-api.appbrewery.com"

const Token="9d62dee5-4b11-4d66-90c8-fc467c45d863";

app.use(bodyParser.urlencoded({extended:true}));


app.get("/",async (req,res)=>{
    res.render("index.ejs",{ content : "Waiting For Data"})
})


const config = {headers: {Authorization :`Bearer ${Token}`}, }

app.post("/get-secret",async (req,res)=>{
    const searchId = req.body.id;
    try{
        const result = await axios.get(API_URL + "/secrets/" +searchId ,config );
        res.render("index.ejs",{constent : JSON.stringify(result.data)})
    }
    catch(error){
        res.render("index.ejs",{content : JSON.stringify(error.response.data)})
    }
});








app.listen(port,()=>{
    console.log(`server running on ${port}`)
})
