const Weather = () => {
    return {

        async fetchLocation(city) {
            const raw = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=bb9a4a8b3762bb47a3b7ff329d10b88f`, {mode: 'cors'});
            return raw.json();
        },

        async fetchWeather(city) {
            const loc = await this.fetchLocation(city);

            const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${loc[0].lat}&lon=${loc[0].lon}&appid=bb9a4a8b3762bb47a3b7ff329d10b88f`, {mode: 'cors'});
            return data.json();
        },

        

            // Geocode 
            // http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}
        // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

        //`http://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&appid=65&appid=bb9a4a8b3762bb47a3b7ff329d10b88f`
    
    }
}

const newWidget = Weather();
newWidget.fetchWeather('downingtown, usa');
