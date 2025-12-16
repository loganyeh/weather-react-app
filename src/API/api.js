import axios from 'axios';

export const FetchWeather = async (query) => {
    try {
        const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${query}&count=10&language=en&format=json&countryCode=US`)
        const data = await response.json();
        // console.log(data);
        const queryData = {
            latitude: data.results[0].latitude,
            longitude: data.results[0].longitude,
            city: data.results[0].name,
            state: data.results[0].admin1,
        }

        const response2 = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${queryData?.latitude}&longitude=${queryData?.longitude}&daily=weather_code,temperature_2m_max,temperature_2m_min&hourly=temperature_2m,weather_code&current=weather_code,temperature_2m,precipitation,wind_speed_10m,apparent_temperature,relative_humidity_2m&timezone=America%2FNew_York&wind_speed_unit=mph&temperature_unit=fahrenheit&precipitation_unit=inch`)
        const data2 = await response2.json();
        console.log(data2);
        const queryData2 = {
            city: data.results[0].name,
            state: data.results[0].admin1,
            date: data2.current.time,
            weatherCode: data2.current.weather_code, 
            currentTemp: data2.current.temperature_2m,
            apparentTemp: data2.current.apparent_temperature,
            humidity: data2.current.relative_humidity_2m,
            wind: data2.current.wind_speed_10m,
            precipitation: data2.current.precipitation,
            dailyForecast1: data2.hourly.time,
            tempMaxArray: data2.daily.temperature_2m_max,
            tempMinArray: data2.daily.temperature_2m_min,
            weatherCodeArray: data2.daily.weather_code,
            hourlyWeatherCodeArray: data2.hourly.weather_code,
            hourlyTemperatureArray: data2.hourly.temperature_2m,
        }

        return {queryData, queryData2};

    } catch (error) {
        
    }
}

// WORKING ON THIS API
export const FetchAtlanta = async () => {
    try {
        const response1 = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=lawrenceville&count=10&language=en&format=json&countryCode=US`);
        const data1 = await response1.json();
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=33.9562&longitude=-83.988&daily=weather_code,temperature_2m_max,temperature_2m_min&hourly=temperature_2m,weather_code&current=weather_code,temperature_2m,precipitation,wind_speed_10m,apparent_temperature,relative_humidity_2m&timezone=America%2FNew_York&wind_speed_unit=mph&temperature_unit=fahrenheit&precipitation_unit=inch`)
        const data = await response.json();
        const dataObject = {
            city: data1.results[0].name,
            state: data1.results[0].admin1,
            latitude: data.latitude,
            longitude: data.longitude,
            date: data.current.time,
            weatherCode: data.current.weather_code, 
            currentTemp: data.current.temperature_2m,
            apparentTemp: data.current.apparent_temperature,
            humidity: data.current.relative_humidity_2m,
            wind: data.current.wind_speed_10m,
            precipitation: data.current.precipitation,
            dailyForecast1: data.hourly.time,
            tempMaxArray: data.daily.temperature_2m_max,
            tempMinArray: data.daily.temperature_2m_min,
            weatherCodeArray: data.daily.weather_code,
            hourlyWeatherCodeArray: data.hourly.weather_code,
            hourlyTemperatureArray: data.hourly.temperature_2m,
        }

        // console.log(data);
        // console.log(dataObject.dailyForecast1[0]);
        // console.log(dataObject.dailyForecast1[24]);

        return dataObject;

    } catch (error) {
        console.error(error);
    }
}