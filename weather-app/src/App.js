import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = () => {
    const [weatherData, setWeatherData] = useState(null);

    // if used without additional parameters, useEffect runs the code inside it on page load
    useEffect(() => {
        const fetchWeather = async (lat, lon) => {
          try {
            // get request to the api with the lat and lon values to verify current location(city)
            const response = await axios.get('http://api.weatherapi.com/v1/current.json', {
              params: {
                key: '59f7a585bcc4414cb8d95951240708',
                q: `${lat},${lon}`,
              },
            });
            // send the data we got from the api to 'WeatherData'
            setWeatherData(response.data);
          } catch (error) {
            console.log(error.message);
          }
        };
    
        const handleGeolocationSuccess = (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeather(latitude, longitude);
        };
    
        const handleGeolocationError = (error) => {
          console.log('Error retrieving location');
        };
    
        // get user location
        // check if user accepted the location prompt
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(handleGeolocationSuccess, handleGeolocationError);
        } else {
          console.log('error line 38');
        }
      }, []);

    return (
        <div>
            <h1>Weather Information</h1>
            {weatherData && (
                <div>
                    <h2>{weatherData.location.name}</h2>
                    <p>Temperature: {weatherData.current.temp_c}°C</p>
                    <p>Condition: {weatherData.current.condition.text}</p>
                    <p>gust kph: {weatherData.current.gust_kph}</p>
                    <p>humidity: {weatherData.current.humidity}</p>
                </div>
            )}
            <script>
                function log_console() {
                    console.log(weatherData)
                }
            </script>
        </div>
    );
};

export default Weather;
