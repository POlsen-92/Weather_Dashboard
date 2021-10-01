var searchCityEl = document.querySelector('#searchCity')
var cityInputEl = document.querySelector('#searchbar')


//Todays Variables
var cityName = document.querySelector('#city-name');
var day0 = document.querySelector('#day0');
var icon0 = document.querySelector('#icon0');
var temp0 = document.querySelector('#temp0');
var wind0 = document.querySelector('#wind0');
var humid0 = document.querySelector('#humid0');
var uv0 = document.querySelector('#uv0');

//Tomorrows Variables
var day1 = document.querySelector('#day1');
var icon1 = document.querySelector('#icon1');
var temp1 = document.querySelector('#temp1');
var wind1 = document.querySelector('#wind1');
var humid1 = document.querySelector('#humid1');


//2 days later variables
var day2 = document.querySelector('#day2');
var icon2 = document.querySelector('#icon2');
var temp2 = document.querySelector('#temp2');
var wind2 = document.querySelector('#wind2');
var humid2 = document.querySelector('#humid2');


//3 days later variables
var day3 = document.querySelector('#day3');
var icon3 = document.querySelector('#icon3');
var temp3 = document.querySelector('#temp3');
var wind3 = document.querySelector('#wind3');
var humid3 = document.querySelector('#humid3');


//4 days later variables
var day4 = document.querySelector('#day4');
var icon4 = document.querySelector('#icon4');
var temp4 = document.querySelector('#temp4');
var wind4 = document.querySelector('#wind4');
var humid4 = document.querySelector('#humid4');


//5 days later variables
var day5 = document.querySelector('#day5');
var icon5 = document.querySelector('#icon5');
var temp5 = document.querySelector('#temp5');
var wind5 = document.querySelector('#wind5');
var humid5 = document.querySelector('#humid5');

var city;  //Input from user

//city input

var citySubmitHandler = function (event) {
    event.preventDefault();
  
    city = cityInputEl.value.trim();
    console.log(city)
    if (city) {
      getCityInfo(city);
  
    } else {
      alert('Please enter a city');
    }
  };

var APIkey = "b1048ffe692830f2dafbaad135f0fd00";


//function to get city info is below

function getCityInfo() {
    var queryURL1 = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIkey;
    fetch(queryURL1)//first call is going to be getting latitude and longitude of the city
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        var lon = data.coord.lon;
        var lat = data.coord.lat;
        
        var queryURL2 = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&units=imperial&exclude=minutely,hourly,alerts&appid=" + APIkey;
            fetch(queryURL2)  //use lat and lon to get 5 day weather info and place into els
                .then(function (response) {
                    return response.json();
                }) 
                .then(function (data) {
                //add content to elements day0
                    cityName.textContent = city;
                    day0.textContent = moment.unix(data.current.dt).format("MM-DD-YY");
                    icon0.textContent = data.current.weather.icon;
                    temp0.textContent = data.current.temp;
                    wind0.textContent = data.current.wind_speed;
                    humid0.textContent = data.current.humidity;
                    uv0.textContent = data.current.uvi;
                //add content to elements day1
                    day1.textContent = moment.unix(data.daily[0].dt).format("MM-DD-YY");
                    icon1.textContent = data.daily[0].weather.icon;
                    temp1.textContent = data.daily[0].temp.day;
                    wind1.textContent = data.daily[0].wind_speed;
                    humid1.textContent = data.daily[0].humidity;
                //add content to elements day2
                    day2.textContent = moment.unix(data.daily[1].dt).format("MM-DD-YY");
                    icon2.textContent = data.daily[1].weather.icon;
                    temp2.textContent = data.daily[1].temp.day;
                    wind2.textContent = data.daily[1].wind_speed;
                    humid2.textContent = data.daily[1].humidity;
                //add content to elements day 3
                    day3.textContent = moment.unix(data.daily[2].dt).format("MM-DD-YY");
                    icon3.textContent = data.daily[2].weather.icon;
                    temp3.textContent = data.daily[2].temp.day;
                    wind3.textContent = data.daily[2].wind_speed;
                    humid3.textContent = data.daily[2].humidity;
                //add content to elements day 4
                    day4.textContent = moment.unix(data.daily[3].dt).format("MM-DD-YY");
                    icon4.textContent = data.daily[3].weather.icon;
                    temp4.textContent = data.daily[3].temp.day;
                    wind4.textContent = data.daily[3].wind_speed;
                    humid4.textContent = data.daily[3].humidity;
                //add content to elements day 5
                    day5.textContent = moment.unix(data.daily[4].dt).format("MM-DD-YY");
                    icon5.textContent = data.daily[4].weather.icon;
                    temp5.textContent = data.daily[4].temp.day;
                    wind5.textContent = data.daily[4].wind_speed;
                    humid5.textContent = data.daily[4].humidity;
                })

        })
    }

searchCityEl.addEventListener('submit', citySubmitHandler);


