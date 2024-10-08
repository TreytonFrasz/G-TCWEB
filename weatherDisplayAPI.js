//a class for handling the Weather API requests
class WeatherAPI {
    async getWeather(latitude, longitude) {
        const response = await fetch(`/weather?latitude=${latitude}&longitude=${longitude}`);

        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return await response.json();
    }
}

document.getElementById('weatherForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const location = document.getElementById('locationInput').value;

    //the location needs to be converted to latitude and longitude
    //i've used hardcoded values here for now, we may want to implement a geocoding service later
    let latitude = 52.52;
    let longitude = 13.41;

    let weatherAPI = new WeatherAPI();

    try {
        let data = await weatherAPI.getWeather(latitude, longitude);
        displayWeather(data);
    } catch (error) {
        console.error('There was a problem retrieving data:', error);
        alert('Failed to get weather data, please try again.');
    }
});

function displayWeather(data) {
    //get relevant information from the data
    let temperature = data.hourly.temperature_2m[0]; //the first hourly temperature
    let weatherInfo = `Current temperature: ${temperature}°C`;

    //update the display(DOM) to show the weather info
    let resultDiv = document.getElementById('weatherResult');
    //and display the result
    resultDiv.innerHTML = weatherInfo;
}