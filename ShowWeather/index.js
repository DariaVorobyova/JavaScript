// Программа показывает погоду по текущей геолокации при нажатии кнопки DisplayWeather 

function getWeather() {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        receiveData(position.coords.latitude.toFixed(2), position.coords.longitude.toFixed(2));
      })
    } else {
      alert('Could not get location.');
    }
  }
  
  function receiveData(lat, long) {
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon='+ long +'&appid=b39bc41d2ebb7cdb7c7432343a8a764a')
      .then(function (response) {
        return response.json();
      })
      .then(function displayWeather (response) {
        document.getElementById('current-pressure').innerHTML = 'Pressure is ' + response.main.pressure + "hPa"
        document.getElementById('current-temperature').innerHTML = 'Temperature is ' + response.main.temp + "°";
        document.getElementById('current-humidity').innerHTML = 'Humidity is ' +  response.main.humidity + "%";
        document.getElementById('current-wind-speed').innerHTML = 'Wind speed is ' + response.wind.speed + " meter/sec";
  
      })
  }
  document.getElementById('btn').addEventListener('click', getWeather());