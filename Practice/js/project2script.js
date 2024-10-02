import { getWeather } from "./general_modules";
displayWeather();

async function displayWeatherWeather() {
    let currentWeather = await getWeather();
    console.log(currentWeather.current.temperature_2m);
}

