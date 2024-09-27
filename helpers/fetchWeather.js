import { config } from "dotenv";

config();

const API_KEY = process.env.API_KEY;

const fetchWeather = async(city) => {
    try{

        let endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
        
        const response = await fetch(endpoint);
        const data = await response.json()
        const { main } = data;
        const temperatura = Math.trunc(main.temp - 273.15, 1)

        return temperatura;
        
    }catch(error){
        return error
    }
}


export default fetchWeather