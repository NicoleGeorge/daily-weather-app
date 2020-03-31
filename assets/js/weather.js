"use strict"
$(document ).ready(function() {

// API call format: api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}
// const uvURL = "https://http://api.openweathermap.org/data/2.5/uvi?appid={appid}&lat={lat}&lon={lon}";
// API key: 4628463fa26bf6e9e88de6363b182cb3

const url = "http://api.openweathermap.org/data/2.5/weather?q=";


// adding click event for search field

    $('#searchButton').click(function() {
        return getWeather();
    })


    function getWeather(){
        const city = $('#inputCity').val();

        // validation - city must be entered 
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


        } else {
            // adding bootstrap classes to the error message - alert & close X button
            $('#errorMessage').html("<div class='alert alert-danger' id='inputError'>Please enter a city name to continue.</div>");
        }
    }

    function displayData(result) { 
        // returning data values + country name & country code output
        return  '<h3>Current Weather for: ' + result.name + ', ' + result.sys.country+' </h3>' +
                "<h4>Temperature: " + result.main.temp + "&deg;C </h4>" +
                "<h4>Humidity: " + result.main.humidity + "% </h4>" +
                "<h4>Wind: " + result.wind.speed + " m/s </h4>" + 
                "<h4>Sky Conditions: " + result.weather[0].description + "</h4>" +
                "<h4>UV Index: " + "</h4>";
                
    }

});