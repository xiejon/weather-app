const Weather = () => {
    return {
        get(city) {

            async function fetchLocation(city) {
                const raw = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=bb9a4a8b3762bb47a3b7ff329d10b88f`, {mode: 'cors'});
                const json = await raw.json();
                const lat = json[0].lat;
                const lon = json[0].lon;
                return { lat, lon }
            }

            async function fetchWeather(city) {
                const loc = await fetchLocation(city);
                const raw = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${loc.lat}&lon=${loc.lon}&appid=bb9a4a8b3762bb47a3b7ff329d10b88f`, {mode: 'cors'});
                const json = await raw.json();
                console.log(json);
                return json;
            }

            fetchWeather(city);

            // Geocode 
            // http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}
        // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

        //`http://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&appid=65&appid=bb9a4a8b3762bb47a3b7ff329d10b88f`
        }
    }
}

const newWidget = Weather();
newWidget.get('downingtown, usa');
