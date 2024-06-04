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
async function fetchWeatherData(city){
const apiKey = 'af4f65ffb755d5558f112052eaa97dbf';
const apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

try {
    const response = await fetch(apiUrl);
    if(!response.ok){
        throw new Error('City is not Found');
    }
    const data = await response.json();
    displayWeatherData(data);
} catch(error){
    alert(error.message);
}

}

// Function for the weather data 

function displayWeatherData(data) {
    cityInput.textContent = data.name;
    temperature.textContent = `Temperature: ${data.main.temp}C`;
    humid.textContent = `Humidity:  ${data.main.humid}%`;
    description.textContent = data.weather[0].description;
    weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png;`
   weatherInfo.classList.remove('hidden');
}