const Weather = () => {
    let celsius = false;
    return {
        celsius,

        async getUserLocation() {
            const successCallback = position => position;
            const errorCallback = error => error;
            let promise = new Promise((resolve, reject) => {
                window.navigator.geolocation.getCurrentPosition(position => {
                    resolve(successCallback(position));
                }, error => {
                    reject(errorCallback(error));
                });
            });

            return await promise;
        },

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
            if (celsius) {
                return Math.round(kelvin - 273.15);
            } else {
                return Math.round((9/5) * (kelvin - 273.15) + 32);
            }
        }

    }
}

const newWidget = Weather();

newWidget.getUserLocation()
            .then(position => console.log(position))
            .catch((err) => console.log(err))

newWidget.fetchWeather('downingtown, usa')
            .then(item => console.log(newWidget.convertTemp(item.main.temp)));