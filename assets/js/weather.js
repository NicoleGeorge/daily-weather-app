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
    }
})

})