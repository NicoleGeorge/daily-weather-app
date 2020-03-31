"use strict"
$(document ).ready(function() {

// URL REFERENCES;
// API call format: api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}
// const uvURL = "https://http://api.openweathermap.org/data/2.5/uvi?appid={appid}&lat={lat}&lon={lon}";
// API key: 4628463fa26bf6e9e88de6363b182cb3
// URL to retrieve the icon images - http://openweathermap.org/img/wn/

const url = "http://api.openweathermap.org/data/2.5/weather?q=";

// START: adding a click event to search field

    $('#searchButton').click(function() {
        return getWeather();
    })

    // fetching weather data function based on search city input

    function getWeather(){
        const city = $('#inputCity').val();

// START: creating an ajax call & outputting displayData function - see below 

        if (city != ''){

            $.ajax ({
                url: url + city + "&units=metric" + "&appid=4547d4d0a5accd3b6ae29ab1abbcddfc",
                type: "GET",
                dataType: "jsonp",
                success: function(result) {
                    let widget = displayData(result)
                    $("#displayWeather").html(widget);
                    $("#inputCity").val('');
                } 
            })

        // validation - city must be entered 
        } else {
            // adding bootstrap classes to the error message - alert & close X button
            $('#errorMessage').html("<div class='alert alert-danger' id='inputError'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>Please enter a city name to continue.</div>");
        }
    }

// START: creating displayData function to output pulled results from OpenWeather API

    function displayData(result) { 
        // returning data values + country name & country code output
        return  '<h3>Weather for: ' + result.name + ', ' + result.sys.country+' </h3>' +
                "<h4>Current conditions: <img src='http://openweathermap.org/img/wn/" + result.weather[0].icon + ".png'>  "+ result.weather[0].description + "</h4>" +
                "<h4>Temperature: " + result.main.temp + "&deg;C </h4>" +
                "<h4>Humidity: " + result.main.humidity + "% </h4>" +
                "<h4>Wind: " + result.wind.speed + " m/s </h4>" + 
                "<h4>UV Index: " + "</h4>";
                
    }


// START - local storage for searched cities


});