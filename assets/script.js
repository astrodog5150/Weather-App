document.getElementById('searchBtn').addEventListener('click', function() {
    var location = document.getElementById('location').value;
    if (location !== '') {
        var apiKey = 'c464f7ab09cba0799c19b1935860a630';
        var geocodingUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

        fetch(geocodingUrl)
            .then(response => response.json())
            .then(geocodingData => {
                if (geocodingData.coord) {
                    // put 5-day forecast api fetch here
                