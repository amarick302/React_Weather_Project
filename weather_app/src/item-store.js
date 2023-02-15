import { legacy_createStore as creaeteStore } from "redux";
const initialStore={
    image:"https://th.bing.com/th/id/R.46b1f03356038f37b36c37c5d7d96d29?rik=Wzz637vT6rR3Sw&riu=http%3a%2f%2fres.publicdomainfiles.com%2fpdf_view%2f65%2f13920112214859.png&ehk=7uKLyr3A04XAJ4KwrSHv5XxqfScTsSFIT7NeE1qg%2bN4%3d&risl=&pid=ImgRaw&r=0",
    
    backgroundImage:"https://img.freepik.com/free-photo/nature-colorful-landscape-dusk-cloud_1203-5705.jpg"
}
function itemReducer(state=initialStore,action){
    switch (action.type){
        case 'haze':
            return{...state,image:"https://cdn1.iconfinder.com/data/icons/weather-470/128/HAZE-512.png",backgroundImage:"https://www.miskolcsun.hu/media/2018/11/11-145686-foggy-weather-continues/1.jpg"}
        case 'sunny':
            return{...state,image:"https://th.bing.com/th/id/R.46b1f03356038f37b36c37c5d7d96d29?rik=Wzz637vT6rR3Sw&riu=http%3a%2f%2fres.publicdomainfiles.com%2fpdf_view%2f65%2f13920112214859.png&ehk=7uKLyr3A04XAJ4KwrSHv5XxqfScTsSFIT7NeE1qg%2bN4%3d&risl=&pid=ImgRaw&r=0",backgroundImage:"https://img.freepik.com/free-photo/nature-colorful-landscape-dusk-cloud_1203-5705.jpg"}
        case 'cloud':
            return{...state,image:"https://cdn-icons-png.flaticon.com/512/5903/5903939.png",backgroundImage:"https://www.rochesterfirst.com/wp-content/uploads/sites/66/2021/04/sky-1107579_1920.jpg"}
        case 'rain':
            return{...state,image:"https://www.clipartmax.com/png/middle/182-1822480_rain-icon-rainy-weather-icon.png",backgroundImage:"https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?b=1&s=170667a&w=0&k=20&c=7nD_8127UoUACRboJelDa-h-g0afqyRP9h8jtJ5xvUo="}
        case 'overcast':
            return{...state,image:"https://img.favpng.com/18/19/25/computer-icons-symbol-cloud-desktop-wallpaper-overcast-png-favpng-R6DF02tRtHGXeD6YjaWVmuZqy.jpg",backgroundImage:"https://images.wallpaperscraft.com/image/single/clouds_cloudy_horizon_123783_1920x1080.jpg"}
        case 'snow':
            return{...state,image:"https://cdn-icons-png.flaticon.com/512/1779/1779932.png",backgroundImage:"https://wallpaperaccess.com/full/1124094.jpg"}
        case 'foggy':
            return{...state,image:"https://icon-library.com/images/foggy-icon/foggy-icon-18.jpg",backgroundImage:"https://images.wallpapersden.com/image/download/fog-reflection-4k_bGdqbGmUmZqaraWkpJRmbmdlrWZlbWU.jpg"}
        case 'thunder':
            return{...state,image:"https://www.clipartmax.com/png/middle/129-1294912_thunderstorm-transparent-lightning-weather-icon.png",backgroundImage:"https://images.wallpapersden.com/image/download/lightning-at-night-hd_bGlpamiUmZqaraWkpJRmbmdlrWZlbWU.jpg"}
        case 'windy':
            return{...state,image:"https://cdn-icons-png.flaticon.com/512/1247/1247767.png",backgroundImage:"https://wallpapercave.com/wp/wp2265722.jpg"}
        default:
            return{...state,image:"https://th.bing.com/th/id/R.46b1f03356038f37b36c37c5d7d96d29?rik=Wzz637vT6rR3Sw&riu=http%3a%2f%2fres.publicdomainfiles.com%2fpdf_view%2f65%2f13920112214859.png&ehk=7uKLyr3A04XAJ4KwrSHv5XxqfScTsSFIT7NeE1qg%2bN4%3d&risl=&pid=ImgRaw&r=0",backgroundImage:"https://img.freepik.com/free-photo/nature-colorful-landscape-dusk-cloud_1203-5705.jpg"};
    }
}
export default creaeteStore(itemReducer);