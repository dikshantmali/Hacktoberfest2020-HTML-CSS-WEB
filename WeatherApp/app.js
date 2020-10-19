const express=require("express");
const bodyParser=require("body-parser");
const app=express();
const https=require("https");
app.use(bodyParser({extended:true}));
const { response } = require("express");
app.get("/",function(req,res){
   res.sendFile(__dirname + "/index.html") 
})

app.post("/",function(req,res){
    const city=req.body.inputCity;
    const url="https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=18bfdd796cdeb05083ef41ae60c78317&units=metric"
    https.get(url,function(response){
        

        response.on("data",function(data){
            const weatherData=JSON.parse(data);
            
            const temp=weatherData.main.temp;
            const weatherDes=weatherData.weather[0].description;
            const icon=weatherData.weather[0].icon;
            const imgUrl=" http://openweathermap.org/img/wn/"+icon+"@2x.png";
            res.write("<p>The weather description is "+ weatherDes);
            res.write("<h1>The temperature in "+city+" is "+ temp + " degree celsius.<h1>");
            res.write("<img src="+imgUrl+">");
            res.send();
        })
    })
})

app.listen(3000,function(){
    console.log("server is live on port 3000");
})

