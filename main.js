/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
// import DrizzleImg from './images/day/drizzle.jpg'

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

const UI = () => {
    let nightMode = false;
    return {
        nightMode,
        showData(data) { 
            const weatherDesc = document.querySelector('.desc')
            const city = document.querySelector('.city')
            const locDate = document.querySelector('.local-date')
            const locTime = document.querySelector('.local-time')
            const mainTemp = document.querySelector('.main-temp')
            const feelsLike = document.querySelector('.feels-like')
            const wind = document.querySelector('.wind')
            const humid = document.querySelector('.humidity')

            const timestamp = WeatherObj().convertDate(data).substr(17, 5);
        
            weatherDesc.textContent = data.weather[0].description;
            city.textContent = data.name;
            locDate.textContent = WeatherObj().convertDate(data).substring(0, 17);
            locTime.textContent = timestamp;
            mainTemp.textContent = `°${WeatherObj().convertTemp(data.main.temp)}`;
            feelsLike.textContent = WeatherObj().convertTemp(data.main.feels_like);
            wind.textContent = data.wind.speed;
            humid.textContent = data.main.humidity;

            // Change to night mode between 8pm and 7am
            if (parseInt(timestamp) < 7 || parseInt(timestamp) > 20) {
                this.nightMode = true;
            } else {
                this.nightMode = false;
            }

            // test
            const weatherId = data.weather[0].id.toString();
            this.createBgImage();
            this.setBackground(weatherId)
        }, 
        createBgImage() {
            if (document.querySelector('.background')) return;
            const container = document.querySelector('.container')

            const img = document.createElement('img');
            img.classList.add('.background');
            
            container.append(img);
        },
        setBgImage(link) {
            const img = document.querySelector('.background');
            img.src = link

            console.log(img)
        },
        setBackground(weatherId) {
            switch(weatherId[0]) {
                case '5': 
                // this.setBgImage('images/day/drizzle.jpg')
                break;
                default: 
            }
        }
    }
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

    const newUI = UI();
    newUI.showData(weather);

    console.log(weather)
}

getWeather('kagoshima');

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLGlCQUFpQjtBQUNqQixhQUFhOztBQUViO0FBQ0EsU0FBUztBQUNUO0FBQ0Esc0ZBQXNGLEtBQUssMkNBQTJDLGFBQWE7QUFDbko7QUFDQSxTQUFTO0FBQ1Q7QUFDQSw0RkFBNEYsSUFBSSxPQUFPLElBQUksMkNBQTJDLGFBQWE7QUFDbks7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1Qyx5Q0FBeUM7QUFDaEY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAtMi8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgRHJpenpsZUltZyBmcm9tICcuL2ltYWdlcy9kYXkvZHJpenpsZS5qcGcnXG5cbmNvbnN0IFdlYXRoZXJPYmogPSAoKSA9PiB7XG4gICAgbGV0IGNlbHNpdXMgPSBmYWxzZTtcbiAgICByZXR1cm4ge1xuICAgICAgICBjZWxzaXVzLFxuICAgICAgICBhc3luYyBnZXRVc2VyTG9jYXRpb24oKSB7XG4gICAgICAgICAgICBjb25zdCBzdWNjZXNzID0gcG9zaXRpb24gPT4gcG9zaXRpb247XG4gICAgICAgICAgICBjb25zdCBlcnJvciA9IGVycm9yID0+IGVycm9yO1xuXG4gICAgICAgICAgICBsZXQgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICB3aW5kb3cubmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihwb3MgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHN1Y2Nlc3MocG9zKSk7XG4gICAgICAgICAgICAgICAgfSwgZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKGVycikpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBwcm9taXNlO1xuICAgICAgICB9LFxuICAgICAgICBhc3luYyBmZXRjaExvY2F0aW9uKGNpdHkpIHtcbiAgICAgICAgICAgIGNvbnN0IHJhdyA9IGF3YWl0IGZldGNoKGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPSR7Y2l0eX0mYXBwaWQ9YmI5YTRhOGIzNzYyYmI0N2EzYjdmZjMyOWQxMGI4OGZgLCB7bW9kZTogJ2NvcnMnfSk7XG4gICAgICAgICAgICByZXR1cm4gcmF3Lmpzb24oKTtcbiAgICAgICAgfSxcbiAgICAgICAgYXN5bmMgZmV0Y2hXZWF0aGVyKGxhdCwgbG9uKSB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP2xhdD0ke2xhdH0mbG9uPSR7bG9ufSZhcHBpZD1iYjlhNGE4YjM3NjJiYjQ3YTNiN2ZmMzI5ZDEwYjg4ZmAsIHttb2RlOiAnY29ycyd9KTtcbiAgICAgICAgICAgIHJldHVybiBkYXRhLmpzb24oKTtcbiAgICAgICAgfSxcbiAgICAgICAgY29udmVydFRlbXAoa2VsdmluKSB7XG4gICAgICAgICAgICAvLyBLZWx2aW4gLT4gQ2VsY2l1cy9GYWhyZW5oZWl0IHJvdW5kZWQgdG8gbmVhcmVzdCBpbnRlZ2VyXG4gICAgICAgICAgICBpZiAoY2Vsc2l1cykge1xuICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLnJvdW5kKGtlbHZpbiAtIDI3My4xNSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLnJvdW5kKCg5LzUpICogKGtlbHZpbiAtIDI3My4xNSkgKyAzMik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHNldENlbHNpdXMoKSB7XG4gICAgICAgICAgICB0aGlzLmNlbHNpdXMgPyB0aGlzLmNlbHNpdXMgPSBmYWxzZSA6IHRoaXMuY2Vsc2l1cyA9IHRydWU7XG4gICAgICAgIH0sXG4gICAgICAgIGNvbnZlcnREYXRlKGRhdGEpIHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgoZGF0YS5kdCArIGRhdGEudGltZXpvbmUpICogMTAwMCk7XG4gICAgICAgICAgICAvLyBSZW1vdmUgdXNlcidzIGxvY2FsIHRpbWUtem9uZVxuICAgICAgICAgICAgcmV0dXJuIGRhdGUudG9VVENTdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY29uc3QgVUkgPSAoKSA9PiB7XG4gICAgbGV0IG5pZ2h0TW9kZSA9IGZhbHNlO1xuICAgIHJldHVybiB7XG4gICAgICAgIG5pZ2h0TW9kZSxcbiAgICAgICAgc2hvd0RhdGEoZGF0YSkgeyBcbiAgICAgICAgICAgIGNvbnN0IHdlYXRoZXJEZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlc2MnKVxuICAgICAgICAgICAgY29uc3QgY2l0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaXR5JylcbiAgICAgICAgICAgIGNvbnN0IGxvY0RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9jYWwtZGF0ZScpXG4gICAgICAgICAgICBjb25zdCBsb2NUaW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvY2FsLXRpbWUnKVxuICAgICAgICAgICAgY29uc3QgbWFpblRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi10ZW1wJylcbiAgICAgICAgICAgIGNvbnN0IGZlZWxzTGlrZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mZWVscy1saWtlJylcbiAgICAgICAgICAgIGNvbnN0IHdpbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2luZCcpXG4gICAgICAgICAgICBjb25zdCBodW1pZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5odW1pZGl0eScpXG5cbiAgICAgICAgICAgIGNvbnN0IHRpbWVzdGFtcCA9IFdlYXRoZXJPYmooKS5jb252ZXJ0RGF0ZShkYXRhKS5zdWJzdHIoMTcsIDUpO1xuICAgICAgICBcbiAgICAgICAgICAgIHdlYXRoZXJEZXNjLnRleHRDb250ZW50ID0gZGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgY2l0eS50ZXh0Q29udGVudCA9IGRhdGEubmFtZTtcbiAgICAgICAgICAgIGxvY0RhdGUudGV4dENvbnRlbnQgPSBXZWF0aGVyT2JqKCkuY29udmVydERhdGUoZGF0YSkuc3Vic3RyaW5nKDAsIDE3KTtcbiAgICAgICAgICAgIGxvY1RpbWUudGV4dENvbnRlbnQgPSB0aW1lc3RhbXA7XG4gICAgICAgICAgICBtYWluVGVtcC50ZXh0Q29udGVudCA9IGDCsCR7V2VhdGhlck9iaigpLmNvbnZlcnRUZW1wKGRhdGEubWFpbi50ZW1wKX1gO1xuICAgICAgICAgICAgZmVlbHNMaWtlLnRleHRDb250ZW50ID0gV2VhdGhlck9iaigpLmNvbnZlcnRUZW1wKGRhdGEubWFpbi5mZWVsc19saWtlKTtcbiAgICAgICAgICAgIHdpbmQudGV4dENvbnRlbnQgPSBkYXRhLndpbmQuc3BlZWQ7XG4gICAgICAgICAgICBodW1pZC50ZXh0Q29udGVudCA9IGRhdGEubWFpbi5odW1pZGl0eTtcblxuICAgICAgICAgICAgLy8gQ2hhbmdlIHRvIG5pZ2h0IG1vZGUgYmV0d2VlbiA4cG0gYW5kIDdhbVxuICAgICAgICAgICAgaWYgKHBhcnNlSW50KHRpbWVzdGFtcCkgPCA3IHx8IHBhcnNlSW50KHRpbWVzdGFtcCkgPiAyMCkge1xuICAgICAgICAgICAgICAgIHRoaXMubmlnaHRNb2RlID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5uaWdodE1vZGUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gdGVzdFxuICAgICAgICAgICAgY29uc3Qgd2VhdGhlcklkID0gZGF0YS53ZWF0aGVyWzBdLmlkLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUJnSW1hZ2UoKTtcbiAgICAgICAgICAgIHRoaXMuc2V0QmFja2dyb3VuZCh3ZWF0aGVySWQpXG4gICAgICAgIH0sIFxuICAgICAgICBjcmVhdGVCZ0ltYWdlKCkge1xuICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYWNrZ3JvdW5kJykpIHJldHVybjtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKVxuXG4gICAgICAgICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgIGltZy5jbGFzc0xpc3QuYWRkKCcuYmFja2dyb3VuZCcpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kKGltZyk7XG4gICAgICAgIH0sXG4gICAgICAgIHNldEJnSW1hZ2UobGluaykge1xuICAgICAgICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhY2tncm91bmQnKTtcbiAgICAgICAgICAgIGltZy5zcmMgPSBsaW5rXG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGltZylcbiAgICAgICAgfSxcbiAgICAgICAgc2V0QmFja2dyb3VuZCh3ZWF0aGVySWQpIHtcbiAgICAgICAgICAgIHN3aXRjaCh3ZWF0aGVySWRbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlICc1JzogXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5zZXRCZ0ltYWdlKCdpbWFnZXMvZGF5L2RyaXp6bGUuanBnJylcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gR2V0IHRlbXAgYXQgdXNlciBsb2NhdGlvblxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcihjaXR5KSB7XG4gICAgY29uc3QgbmV3V2lkZ2V0ID0gV2VhdGhlck9iaigpO1xuICAgIGxldCBsb2NhdGlvbjtcbiAgICBsZXQgbGF0O1xuICAgIGxldCBsb247XG5cbiAgICBpZiAoIWNpdHkpIHtcbiAgICAgICAgLy8gRGVmYXVsdCBsb2NhdGlvblxuICAgICAgICBsb2NhdGlvbiA9IGF3YWl0IG5ld1dpZGdldC5nZXRVc2VyTG9jYXRpb24oKTtcbiAgICAgICAgbGF0ID0gbG9jYXRpb24uY29vcmRzLmxhdGl0dWRlO1xuICAgICAgICBsb24gPSBsb2NhdGlvbi5jb29yZHMubG9uZ2l0dWRlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGxvY2F0aW9uID0gYXdhaXQgbmV3V2lkZ2V0LmZldGNoTG9jYXRpb24oY2l0eSk7XG4gICAgICAgIGxhdCA9IGxvY2F0aW9uWzBdLmxhdDtcbiAgICAgICAgbG9uID0gbG9jYXRpb25bMF0ubG9uO1xuICAgIH1cblxuICAgIGNvbnN0IHdlYXRoZXIgPSBhd2FpdCBuZXdXaWRnZXQuZmV0Y2hXZWF0aGVyKGxhdCwgbG9uKTtcblxuICAgIGNvbnN0IG5ld1VJID0gVUkoKTtcbiAgICBuZXdVSS5zaG93RGF0YSh3ZWF0aGVyKTtcblxuICAgIGNvbnNvbGUubG9nKHdlYXRoZXIpXG59XG5cbmdldFdlYXRoZXIoJ2thZ29zaGltYScpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9