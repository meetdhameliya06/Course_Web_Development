import express from "express";
import bodyParser from "body-parser";
// import morgan from "morgan";
import {dirname} from 'path';
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url))

const app = express();
const port = 3000;
let FullName = ""


app.use(bodyParser.urlencoded({extended:true}));

function Name(req,res,next){
  console.log(req.body)
  FullName = req.body["first"] + " " + req.body["last"]
  next();
}

app.use(Name)

app.get("/",(req,res)=>{
  // res.send("hello");
  res.sendFile(__dirname + "/public/index.html")
})

app.post("/submit",(req,res)=>{
  res.send(`YOUR NAME : ${FullName}`)
  // console.log(req.body)
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
