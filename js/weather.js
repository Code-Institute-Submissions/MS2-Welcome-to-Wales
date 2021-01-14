//openweather
//https://api.openweathermap.org/data/2.5/weather?q=Cardiff&appid=983533143e870dc758b970f7b3eb380b
/*let lat = 51.4816; 
let long = -3.1791; cardiff lat long*/

window.addEventListener('load', function() {
    const api = 'https://api.openweathermap.org/data/2.5/weather?q=Cardiff&units=metric&appid=983533143e870dc758b970f7b3eb380b';

    fetch(api)
        .then(function(response) {
            return response.json();
        })
        .then(function(data){
            console.log(data);
            const {main, name, weather} = data;
            $('.weather-city').html(`<h2>${name}</h2>`).css("color", "#D50130");
            $('.temperatureDegree').html(`<h3>Currently it's: ${Math.round(main.temp)}˚C with a low of ${Math.round(main.temp_min)}˚C </h3>`);
            $('.feelsLike').html(`<h3>Feels Like: ${Math.round(main.feels_like)}˚C and ${weather[0].description}</h3>`);
        });
});