var express = require('express');
var router = express.Router();
const WeatherService = require('./weatherFetcher');

const weatherFetcher = new weatherFetcher();

router.get('/', function(req, res, next) {
    res.render('Weather', { title: 'Weather Search' });
});

//router to get weather data
router.get('/weather', async (req, res) => {
    //we expect latitude and longitude as query parameters
    const { latitude, longitude } = req.query;

    try {
        const weatherData = await weatherService.getWeather(latitude, longitude);
        //and send the weather data as JSON response
        res.json(weatherData);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch weather data' });
    }
});

//this part belongs elsewhere in the program:
// document.getElementById('weatherForm').addEventListener('submit', function(event) {
//     event.preventDefault();
//     const location = document.getElementById('locationInput').value;
//     // const apiKey = ''; // Replace with API key
//     const url = `https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m`;
//
// });

module.exports = router;