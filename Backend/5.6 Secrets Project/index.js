import express from "express"
import bodyParser from "body-parser";
import axios from "axios"

// import path from "path";
// import { fileURLToPath } from "url";

const port = 3000;
const app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended : true}))


app.get("/",async (req,res)=>{
    try {
        const result = await axios.get("https://secrets-api.appbrewery.com/random");
        res.render("index.ejs",{
        user : result.data.username,
        secret : result.data.secret
    })
    } catch (error) {
        if (error.response) {
            console.log(error.response.data);
        } else {
            console.log(error.message); // or handle the error in some other way
        }
    }
})



app.listen(port,()=>{
    console.log(`server runnig on ${port}`);
})



