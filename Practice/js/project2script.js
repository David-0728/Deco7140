const weatherURL = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m";

async function getWeather() {
    let response = await fetch(weatherURL);
    let data = await response.json();
    return data;
}

console.log("Retrieving weather data");
console.log(await getWeather());