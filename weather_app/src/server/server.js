const fetch=require('node-fetch');
const express=require('express');
const cors=require('cors');
const app=express();
app.use(cors());
app.use(express.json());

const fetchWeather=async(city)=>{
    const rawResponse=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ea7752efb9024428f37647fa3e3358e9`);
    const result=await rawResponse.json();
    if(rawResponse.ok){
        return result;
    }
}
const fetchTimeandDate= async (lat,lon)=>{
    const rawResponse=await fetch(`https://www.timeapi.io/api/TimeZone/coordinate?latitude=${lat}&longitude=${lon}`);
    const result=await rawResponse.json();
    if(rawResponse.ok){
        return result;
    }
}

app.get('/',(req,res)=>{
    res.send('Hello my name is Atanu Marick');
})

app.post('/submitCity',async(req,res)=>{
    // console.log(req.body);
    const result=await fetchWeather(req.body.city);
    // const weather=result.weather[0].description;
    const latitude=result.coord.lat;
    const longitude=result.coord.lon;
    const dateAndTime=await fetchTimeandDate(latitude,longitude);
    // console.log(dateAndTime);
    const currentTime=dateAndTime.currentLocalTime.substring(11,16);
    // console.log(result);
    // console.log(dateAndTime);
    // console.log(currentTime);
    const newResult={...result,currentTime}
    console.log(newResult);
    res.send(newResult);
})
app.listen(5000,()=>console.log('Server listen at the port: 5000'));