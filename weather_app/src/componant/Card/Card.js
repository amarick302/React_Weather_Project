import { useSelector } from 'react-redux';
import context from '../../Context';
import { useContext } from 'react';
import sun from '../../assets/sunrise.mp4';
import full from '../../assets/nightforest.mp4';
import './Card.css'
const Card = () => {
    const {city}=useContext(context)
    const {time}=useContext(context)
    const {temp}=useContext(context)
    const {humidity}=useContext(context);
    const {windspeed}=useContext(context);
    const image = useSelector((state) => state.image);
    const backgroundImg = useSelector((state) => state.backgroundImage);
    const backgroundVideoChoose=()=>{
        if(time.substring(0,2)>=18 || time.substring(0,2)<3){
            return(
                <video src={full} autoPlay loop muted id='bgvideo'/>
            )
        }
        else{
            return(
                <video src={sun} autoPlay loop muted id='bgvideo'/>
            )
        }
        
    }
    return (
        <div className="main-div">
            {/* <video src={fullmoon} autoPlay loop muted id='bgvideo'/> */}
            {
                backgroundVideoChoose()
            }
            <div className="card">
                <img id='backimage' src={backgroundImg} alt=""/>
                <div id='card-body'>
                    <div id="header">
                        <span>{city}</span>
                        <span>{time}</span>
                    </div>
                    <div id="body">
                        <p>{temp} &#8451;</p>
                    </div>
                    <div id="footer">
                        <div id="first-footer">
                            <div className="container1">
                                <div>
                                    <i className="fa-solid fa-wind"></i>
                                    <span>&nbsp;{windspeed}km/hr</span>
                                </div>
                                <div>
                                    <i className="fa-solid fa-droplet"></i>
                                    <span>&nbsp;&nbsp;{humidity}%</span>
                                </div>
                            </div>
                        </div>
                        <div id="second-footer">
                            <div className="container2">
                                <img src={image} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Card;