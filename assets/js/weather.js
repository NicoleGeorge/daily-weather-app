"use strict"
$(document ).ready(function() {
// API call format: api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}
// API key: 4628463fa26bf6e9e88de6363b182cb3

const apiKey = "4547d4d0a5accd3b6ae29ab1abbcddfc";
const url = "http://api.openweathermap.org/data/2.5/weather?q=Adelaide&APPID=4547d4d0a5accd3b6ae29ab1abbcddfc";

$.ajax ({
    url: url,
    success: function(result){
        console.log(result);
        console.log(result.name);

    // Stage 1: 
    // current location output
        $('#location').text(result.name);

    // Stage 3: Temperature - converting kelvin (default) to celsius
    // let C = result.main.temp - 273.15;

    // use Math.round method to convert output into a round number 
        let C = Math.round(result.main.temp - 273.15);
        // converting the output back into readable number from binary
        let celsius = C.toString();
        $('#temp').text(celsius);
    
    // Stage 5: humidity

        $('#humidity').text(result.main.humidity);

    // Stage 4: wind speed output (default = mps) - don't need to convert it.

        $('#wind').text(result.wind.speed);

    // Stage 2: 
    // sky conditions is the 3rd index of the weather object array

        $('#sky').text(result.weather[0].description);
    }

})

});