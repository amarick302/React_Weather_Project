import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Body.css'
import { useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import context from '../../Context';
import { useContext } from 'react';
const Body = () => {
    const dispatch = useDispatch();
    const {setCity}=useContext(context);
    const {setTime}=useContext(context);
    const {setTemp}=useContext(context);
    const {setHumidity}=useContext(context);
    const {setWindspeed}=useContext(context);
    return (
        <div className="body">
            <img src="https://th.bing.com/th/id/R.027f36ba7052b6994d66549f7abcd745?rik=XkPoLZCx12OIdQ&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f8%2f8%2fd%2f665767.jpg&ehk=qFr%2bJwHgG44QSvc%2fwmUVBdLrge1LsiKgXoIo7JD%2f7gQ%3d&risl=&pid=ImgRaw&r=0" alt='nature pic' />
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
                id='box'
            >
                <TextField id="city" label="Enter Your City Here" variant="standard" InputLabelProps={{ className: "label_color" }} />
            </Box>
            <Link to="/card" style={{textDecoration:"none"}}>
                <Button variant='contained' color="success" size='small' onClick={async () => {
                    const obj = {
                        city: document.getElementById('city').value
                    }
                    setCity(obj.city);
                    const rawResponse = await fetch('http://localhost:5000/submitCity', {
                        method: "post",
                        body: JSON.stringify(obj),
                        headers: {
                            "Accept": "application/json",
                            "Content-Type": "application/json;charset=UTF-8"
                        }
                    })
                    const result = await rawResponse.json();
                    if (rawResponse.ok) {
                        const weather = result.weather[0].description;
                        const currentTime = result.currentTime;
                        const currentTemp = (result.main.temp-273.15).toFixed(1);
                        const humidity=result.main.humidity;
                        const windspeed=result.wind.speed;
                        setTime(currentTime);
                        setTemp(currentTemp);
                        setHumidity(humidity);
                        setWindspeed(windspeed);
                        if(weather.includes('haze')){
                            dispatch({ type: "haze" })
                        }
                       else if(weather.includes('sunny')){
                            dispatch({ type: "sunny" })
                        }
                        else if(weather.includes('cloud')){
                            dispatch({ type: "cloud" })
                        }
                        else if(weather.includes('rain')){
                            dispatch({ type: "rain" })
                        }
                        else if(weather.includes('overcast')){
                            dispatch({ type: "overcast" })
                        }
                        else if(weather.includes('snow')){
                            dispatch({ type: "snow" })
                        }
                        else if(weather.includes('foggy')){
                            dispatch({ type: "foggy" })
                        }
                        else if(weather.includes('thunder')){
                            dispatch({ type: "thunder" })
                        }
                        else if(weather.includes('windy')){
                            dispatch({ type: "windy" })
                        }
                        else{
                            dispatch({ type: "" })
                        }
                    }

                }}>Get Weather</Button>
            </Link>
        </div>
    );
}
export default Body;