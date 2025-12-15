import axios from 'axios';

export const FetchWeather = async () => {
    try {
        const { data } = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=weather_code,temperature_2m_max,temperature_2m_min&hourly=temperature_2m,weather_code&current=weather_code,temperature_2m,precipitation,wind_speed_10m,apparent_temperature,relative_humidity_2m&timezone=America%2FNew_York&wind_speed_unit=mph&temperature_unit=fahrenheit&precipitation_unit=inch`)
        // console.log(data);
    } catch (error) {
        console.error(error);
    }
}


// WORKING ON THIS API
export const FetchAtlanta = async () => {
    try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=33.9562&longitude=-83.988&daily=weather_code,temperature_2m_max,temperature_2m_min&hourly=temperature_2m,weather_code&current=weather_code,temperature_2m,precipitation,wind_speed_10m,apparent_temperature,relative_humidity_2m&timezone=America%2FNew_York&wind_speed_unit=mph&temperature_unit=fahrenheit&precipitation_unit=inch`)
        const data = await response.json();
        const dataObject = {
            lat: data.latitude,
            long: data.longitude,
            date: data.current.time,
            weatherCode: data.current.weather_code, 
            currentTemp: data.current.temperature_2m,
        }

        console.log(data);

        console.log(`
            latitude: ${dataObject.lat}
            longitude: ${dataObject.long}
            date: ${dataObject.date}
            weatherCode: ${dataObject.weatherCode}
            currentTemp: ${dataObject.currentTemp}
            
        `);
        return data;

    } catch (error) {
        console.error(error);
    }
}