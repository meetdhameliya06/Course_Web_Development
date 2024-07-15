import express from "express";

const app = express();
const port = 3000;


app.get("/",(req,res)=>{
    const date = new Date;
    let day =date.getDay();
    // console.log(day)

    let Type= "a weekday";
    let adv= "it's time to work hard";

    if (day === 0 || day == 4)
    {
        Type = "a Weekend"
        adv = "you will go out side with your friends or family membors !"
    }

    res.render("index.ejs",{
        dayType: Type,
        advice: adv,
        // day:date.getDate();
    }
    );
});

app.listen(port,()=>{
    console.log(`server running on ${port}`);
})