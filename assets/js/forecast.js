"use strict"
$(document ).ready(function() {

// URL REFERENCES;
// API call format for 16 day/daily forecast data: api.openweathermap.org/data/2.5/forecast?q={city name}&appid={your api key}
// const uvURL = "https://http://api.openweathermap.org/data/2.5/uvi?appid={appid}&lat={lat}&lon={lon}";
// API key: 046573db14bf374a2834d822061a42fb
// URL to retrieve the icon images - http://openweathermap.org/img/wn/

const url = "https://api.openweathermap.org/data/2.5/forecast/?q=";

// START: adding a click event to search field

    $('#searchForecast').on("click", function() {
        return getForecast();
    })


    // creating a 'fetch weather data function' based on search city input

    function getForecast(){
        const city = $('#inputCity').val();

// START: creating an ajax call & outputting displayData function - see below 

        // validation - only executes if the filed has a value
        if (city != '') {

            $.ajax ({
                url: url + city + "&units=metric" + "&cnt=5" + "&appid=046573db14bf374a2834d822061a42fb",
                type: "GET",
                dataType: "jsonp",
                success: function(result) {
                    
                    var table = '';

                    // creating a loop to go through the .list of results
                    for (var i = 0; i < result.list.length; i++) {
                        table += "<tr>";

                        table += "<td>" + result.list[i].weather[0].icon + "</td>";
                        table += "<td>" + result.list[i].weather[0].description + "</td>";
                        table += "<td>" + result.list[i].main.temp + "&deg;C</td>";
                        table += "<td>" + result.list[i].main.humidity + "%</td>";
                        table += "<td>" + result.list[i].wind.speed + " m/hr</td>";

                        table += "</tr>";
                    }

                    $('#forecastWeather').html(table);
                    $('#inputCity').val('');
                } 
            })

        // validation - city must be entered 
        } else {
            // adding bootstrap classes to the error message - alert & close X button
            $('#errorMessage').html("<div class='alert alert-danger' id='inputError'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>Please enter a city name to continue.</div>");
        }
    }

// START: creating displayData function to output pulled results from OpenWeather API

    // function displayData(result) { 
    //     // returning data values + country name & country code output
    //     return  '<h3>Weather for: ' + result.name + ', ' + result.sys.country+' </h3>' +
    //             "<h4>Current conditions: <img src='http://openweathermap.org/img/wn/" + result.weather[0].icon + ".png'>  "+ result.weather[0].description + "</h4>" +
    //             "<h4>Temperature: " + result.main.temp + "&deg;C </h4>" +
    //             "<h4>Humidity: " + result.main.humidity + "% </h4>" +
    //             "<h4>Wind: " + result.wind.speed + " m/s </h4>" + 
    //             "<h4>UV Index: " + "</h4>";
                
    // }

// START - adding/removing cities to/from the searched cities list
// Stage 4: list variables

const cityList = $('#searchList');

    // Stage 1: adding an event listener 

    $('#searchForecast').on("click", storeCity); {
        // console.log(alert('clicked')); working!
    
    // Stage 7: adding event listener to remove city from the list
        $('#searchList').on('click', removeCity); 

    // 
    // document.addEventListener('DOMContentLoaded', localStorageOnLoad);

    }

    // Stage 2: function to store search for cities

    function storeCity(e){
        e.preventDefault();
        // console.log('city entered!') - working!!

    //  getting search for city value
        const searchedCity = $('#inputCity').val();
        // console.log(searchedCity); - working!! *time for a dance break*

    // Stage 5: creating a remove searched city button
        const removeCityBtn = document.createElement('a');
        removeCityBtn.classList = 'remove-city';
        removeCityBtn.textContent = 'X';

    // Stage 3: creating li elements to drop the search for cities into
    const li = document.createElement('li');
    li.textContent = searchedCity;
    
    // console.log(li); - working...woot woot
    
    // Stage 6: adding the removeCityBtn to the searchedCitiesList
    li.append(removeCityBtn);

    // add to the list
    cityList.append(li);

    // START - add searched cities to local storage
    
    addCityLocalStorage(searchedCity);

}

    // remove city from the DOM function

        function removeCity(e) {
            if (e.target.classList.contains('remove-city')) {
                e.target.parentElement.remove();
                // console.log('Y'); - firing correctly
            }
            // else {
            //     // console.log('N'); - firing correctly
            // }
        }

        function addCityLocalStorage(searchedCity) {
            // console.log('I am stored!'); -working
            let cityList = getCityFromLocalStorage();
            // console.log(cityList); - working

            // add searched city to the array
            cityList.push(searchedCity);
            
            // convert search city array into a string
            localStorage.setItem('cityList', JSON.stringify(cityList));

        }
   
        function getCityFromLocalStorage() {
            let cityList;
            const cityLS = localStorage.getItem('cityList');
            // retrieve values, if null is returned then create empty array
            if (cityLS === null) {
                cityList = [];
            }
            else {
                cityList = JSON.parse(cityLS);
            }
            return cityList;
        }

        // returns seached city value from local storage to page, on load
        function localStorageOnLoad() {
            let cityList = getCityFromLocalStorage();
            
            console.log(cityList);
        }
    });
