// Declare variables for the IDs





// declare variables for the ID's
const searchInput = document.getElementById('searchInput');
const cityInput = document.getElementById('city'); 
const cityName = document.getElementById('cityName');
const temperature = document.getElementById('temperature');
const humidity = document.getElementById('humidity');
const description = document.getElementById('description');
const weatherIcon = document.getElementById('weatherIcon');
const weatherInfo = document.getElementById('weatherInfo');

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
// Function to fetch the API
async function fetchWeatherData(city){
    const apiKey = '6da341b38de840d382f21256240406';
    const apiUrl =  `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

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
    // Log the entire data object for debugging
    console.log(data);

    // Access and log specific data inside the function
    console.log(`City: ${data.location.name}`); // City name
    console.log(`Temperature: ${data.current.temp_c}°C`); // Temperature
    console.log(`Humidity: ${data.current.humidity}%`); // Humidity
    console.log(`Description: ${data.current.condition.text}`); // Weather description
    console.log(`Icon URL: ${data.current.condition.icon}`); // Weather icon URL

    // Update DOM elements with fetched data
    cityName.textContent = data.location.name;
    temperature.textContent = `Temperature: ${data.current.temp_c}°C`;
    humidity.textContent = `Humidity: ${data.current.humidity}%`;
    description.textContent = data.current.condition.text;

    const iconUrl = data.current.condition.icon;
    console.log(iconUrl); // Log the icon URL to verify it
    weatherIcon.src = `https:${iconUrl}`; // Ensure it has the correct protocol
    weatherInfo.classList.remove('hidden');
}

