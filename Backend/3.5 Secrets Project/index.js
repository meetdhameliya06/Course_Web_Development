import express from "express";
import { dirname} from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import { features } from "process";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000 ;

var userIsAuthorised = false;

app.use(bodyParser.urlencoded({extended:true}));


function passwordcheck(req,res,next){
    const password = req.body["password"]
    if (password === "ILoveProgramming"){
        userIsAuthorised = true
    }
    next();
}
app.use(passwordcheck)

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/public/index.html");
})

app.post("/check",(req,res)=>{
    if (userIsAuthorised) {
        res.sendFile(__dirname + "/public/secret.html")

    }  else{
        res.sendFile(__dirname + "/public/indexn.html")
    }
})

app.listen(port,()=>{
    console.log(`server running on ${port}`);
})