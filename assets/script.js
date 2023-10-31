var forecastList = document.getElementById('forecast')

const history = document.createElement('li')
var cityHistory = document.getElementById('cityHistory')
history.textContent = localStorage.getItem("city")

cityHistory.appendChild(history);

document.getElementById('searchBtn').addEventListener('click', function() {
    var location = document.getElementById('location').value;
    if (location !== '') {
        var apiKey = 'c464f7ab09cba0799c19b1935860a630';
        var lat = ""
        var lon = ""
        var geocodingUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;
        
        

        fetch(geocodingUrl)
            .then(response => response.json())
            .then (function(response){
                console.log(response);
                lat = response.coord.lat;
                lon = response.coord.lon;
            var fiveDayUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial&cnt=5`;
            fetch(fiveDayUrl)
                .then(response => response.json())
                .then (function(response){
                console.log(response);
                response.list.forEach(item => {

                    const weatherIcon = document.createElement('img');
                    weatherIcon.src = `https://openweathermap.org/img/w/${item.weather[0].icon}.png`;
                    console.log(response.main);
                    const day = document.createElement('li');
                    day.textContent = `City Name: ${location} Date: ${response.dt_txt} Icon: ${weatherIcon} Temp: ${response.main.temp} Humidity: ${response.main.humidity} Wind:${response.wind.speed}`;
                    forecastList.appendChild(day);
                    localStorage.setItem(`${location}`, `${response.main.temp}`)
                    console.log(day);
                    
            });    
            });
        
        });
        
    
            
    }
});

