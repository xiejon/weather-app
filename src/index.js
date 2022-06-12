const Weather = () => {
    let celcius = false;
    return {
        celcius,

        async fetchLocation(city) {
            const raw = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=bb9a4a8b3762bb47a3b7ff329d10b88f`, {mode: 'cors'});
            return raw.json();
        },

        async fetchWeather(city) {
            const loc = await this.fetchLocation(city);

            const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${loc[0].lat}&lon=${loc[0].lon}&appid=bb9a4a8b3762bb47a3b7ff329d10b88f`, {mode: 'cors'});
            return data.json();
        },

        convertTemp(kelvin) {
            // Kelvin -> Celcius/Fahrenheit rounded to nearest integer
            if (celcius) {
                return Math.round(kelvin - 273.15);
            } else {
                return Math.round((9/5) * (kelvin - 273.15) + 32);
            }
        }

    }
}

const newWidget = Weather();
const weather = newWidget.fetchWeather('downingtown, usa');
weather.then(item => console.log(newWidget.convertTemp(item.main.temp)))