"use strict"
$(document ).ready(function() {
// API call format: api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}
// API key: 4628463fa26bf6e9e88de6363b182cb3

const apiKey = "4547d4d0a5accd3b6ae29ab1abbcddfc";
const url = "http://api.openweathermap.org/data/2.5/weather?q=Adelaide&APPID=4547d4d0a5accd3b6ae29ab1abbcddfc";
const urlUV = 
$.ajax ({
    url: url,
    success: function(result){
        console.log(result);
        console.log(result.name);

    // Stage 1: current location output
    let displayCity = `Current weather in: ${result.name}`;
        $('#location').html(displayCity);

    // Stage 3: Temperature - converting kelvin (default) to celsius
    // let C = result.main.temp - 273.15;

    // use Math.round method to convert output into a round number 
        let C = Math.round(result.main.temp - 273.15);
        // optimising the code + used https://altcodes.net to find alt codes
        let displayTemp = `Temperature: ${C}&#176;C`
        $('#temp').html(displayTemp);
    
    // Stage 5: humidity
        let displayHumidity = `Humidity: ${result.main.humidity}%`
        $('#humidity').html(displayHumidity);

    // Stage 4: wind speed output (default = mps) - don't need to convert it.
        let displayWind = `Wind: ${result.wind.speed} mps`;
        $('#wind').html(displayWind);

    // Stage 2: 
    // sky conditions is the 3rd index of the weather object array
        let displaySky = `Sky Conditions: ${result.weather[0].description}`;
        $('#sky').html(displaySky);
    }

})

});