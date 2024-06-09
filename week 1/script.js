async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = 'cd9d5c771281955d9637c3f154257177';  // Replace with your actual API key
    const url = `https://api.openweathermap.org/data/2.5/weather?`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
            document.getElementById('cityName').innerText = data.name;
            document.getElementById('temperature').innerText = `Temperature: ${data.main.temp}°C`;
        } else {
            alert('City not found');
        }
    } catch (error) {
        console.error('Error fetching the weather data:', error);
        alert('Failed to fetch weather data');
    }
}
