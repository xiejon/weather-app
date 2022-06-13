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
        },

        setCelsius() {
            this.celsius ? this.celsius = false : this.celsius = true;
        },

        convertDate(data) {
            const date = new Date((data.dt + data.timezone) * 1000);
            // Remove user's local time-zone
            return date.toUTCString();
        }
    }
}

async function setUI(data) { 
    const weatherDesc = document.querySelector('.desc')
    const city = document.querySelector('.city')
    const locDate = document.querySelector('.local-date')
    const locTime = document.querySelector('.local-time')
    const mainTemp = document.querySelector('.main-temp')
    const feelsLike = document.querySelector('.feels-like')
    const wind = document.querySelector('.wind')
    const humid = document.querySelector('.humidity')

    weatherDesc.textContent = data.weather[0].description;
    city.textContent = data.name;
    locDate.textContent = WeatherObj().convertDate(data).substring(0, 17);
    locTime.textContent = WeatherObj().convertDate(data).substr(17, 5);
    mainTemp.textContent = `°${WeatherObj().convertTemp(data.main.temp)}`;

    feelsLike.textContent = WeatherObj().convertTemp(data.main.feels_like);
    wind.textContent = data.wind.speed;
    humid.textContent = data.main.humidity;
}

// Get temp at user location
async function getWeather(city) {
    const newWidget = WeatherObj();
    let location;
    let lat;
    let lon;

    if (!city) {
        // Default location
        location = await newWidget.getUserLocation();
        lat = location.coords.latitude;
        lon = location.coords.longitude;
    } else {
        location = await newWidget.fetchLocation(city);
        lat = location[0].lat;
        lon = location[0].lon;
    }

    const weather = await newWidget.fetchWeather(lat, lon);

    setUI(weather);

    console.log(weather)
}

getWeather('kagoshima');