import './App.css';
import Body from './componant/Body/Body';
import Card from './componant/Card/Card';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import context from './Context';
import { useState } from 'react';
function App() {
  const [city, setCity] = useState('');
  const [time, setTime] = useState('');
  const [temp, setTemp] = useState('');
  const [humidity,setHumidity]=useState('');
  const [windspeed,setWindspeed]=useState('');
  return (
    <div>
      <context.Provider value={{city,setCity,time,setTime,temp,setTemp,humidity,setHumidity,windspeed,setWindspeed}}>
        <Router>
          <Routes>
            <Route exact path='/' element={<Body />} />
            <Route exact path='/card' element={<Card />} />
          </Routes>
        </Router>
      </context.Provider>
    </div>
  );
}

export default App;
