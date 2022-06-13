const WeatherObj = () => {
    let celsius = false;
    return {
        celsius,

        async getUserLocation() {
            const success = position => position;
            const error = error => error;
            let promise = new Promise((resolve, reject) => {
                window.navigator.geolocation.getCurrentPosition(pos => {
                    resolve(success(pos));
                }, err => {
                    reject(error(err));
                });
            });

            return await promise;
        },

        async fetchLocation(city) {
            const raw = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=bb9a4a8b3762bb47a3b7ff329d10b88f`, {mode: 'cors'});
            return raw.json();
        },

        async fetchWeather(lat, lon) {
            const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=bb9a4a8b3762bb47a3b7ff329d10b88f`, {mode: 'cors'});
            return data.json();
        },

        convertTemp(kelvin) {
            // Kelvin -> Celcius/Fahrenheit rounded to nearest integer
            if (celsius) {
                return Math.round(kelvin - 273.15);
            } else {
                return Math.round((9/5) * (kelvin - 273.15) + 32);
            }
        }
    }
}

async function getWeather() {
    const newWidget = WeatherObj();

    const loc = await newWidget.fetchLocation('downingtown, usa');
    const weather = await newWidget.fetchWeather(loc[0].lat, loc[0].lon);
    console.log(newWidget.convertTemp(weather.main.temp));

}
getWeather();

// async function getWeather() {
//     const newWidget = WeatherObj();

//     const loc = await newWidget.fetchLocation('downingtown, usa');
//     const weather = await newWidget.fetchWeather(loc[0].lat, loc[0].lon);
//     console.log(newWidget.convertTemp(weather.main.temp));

// }

// getWeather();