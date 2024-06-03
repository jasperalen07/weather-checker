// declare variables for the ID's
const searchInput = document.getElementById('searchInput')
const cityInput = document.getElementById('city')
const temperature = document.getElementById('temperature')
const humid = document.getElementById('humid')
const description = document.getElementById('description')
const weatherIcon = document.getElementById('weatherIcon')
const weatherInfo = document.getElementById('weatherInfo')

//Do a Event Listener for the button
searchInput.addEventListener('click', function(){
    const city = cityInput.value;
    if(city){
        fetchWeatherData(city);
    } else{
        alert('Please enter a city name')
    }
   
});

//Function to fetch the Api
