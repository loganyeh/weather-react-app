import {
    drizzle,
    fog,
    overcast,
    partlyCloudy,
    rain,
    snow,
    storm,
    sunny,
  } from "../assets/images";

  export default function WeatherCodeFn(num) {
    switch(num){
        case 0:
        case 1:
            return sunny;
        case 2:
            return partlyCloudy;
        case 3:
            return overcast;
        case 45: 
        case 48:
            return fog;
        case 51: 
        case 53: 
        case 55:
            return drizzle;
        case 61:
        case 63: 
        case 65: 
        case 80:
        case 81:
        case 82: 
            return rain;
        case 56: 
        case 57:
        case 66: 
        case 67: 
        case 71:
        case 73: 
        case 75: 
        case 77: 
        case 85:
        case 86: 
            return snow;
        case 95: 
        case 96: 
        case 99: 
            return storm;
    }

  }

//   switch(num){
//     case 0:
//         return sunny;
//     case 1:
//         return sunny;
//     case 2:
//         return partlyCloudy;
//     case 3:
//         return overcast;
//     case 45: 
//     case 48:
//         return fog;
//     case 51: 
//     case 53: 
//     case 55:
//         return drizzle;
//     case 56: 
//     case 57:
//         return snow;
//     case 61:
//     case 63: 
//     case 65: 
//         return rain;
//     case 66: 
//     case 67: 
//         return snow;
//     case 71:
//     case 73: 
//     case 75: 
//         return snow;
//     case 77: 
//         return snow;
//     case 80:
//     case 81:
//     case 82: 
//         return rain;
//     case 85:
//     case 86: 
//         return snow;
//     case 95: 
//         return storm;
//     case 96: 
//     case 99: 
//         return storm;
// }