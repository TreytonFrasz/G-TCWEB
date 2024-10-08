//install node-fetch if not installed already
const fetch = require("node-fetch");
const url = require("node:url");
const {response, response, response} = require("express");
const console = require("node:console");

class WeatherService {

    constructor() {
        this.baseUrl = 'https://api.open-meteo.com/v1/forecast';
    }

    async getWeather(latitude, longitude) {
        let url = `${this.baseUrl}?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m`;

        try {
            let response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return await response.json();
        } catch (error) {
            console.error('Error fetching weather data:', error);
            throw error;
        }
    }
}

module.exports = WeatherService;