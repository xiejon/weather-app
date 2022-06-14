import "./styles.css";
// Background images
import DrizzleImg from "./images/day/drizzle.jpg";
import RainImg from "./images/day/rain.jpg";
import ThunderImg from "./images/day/thunderstorm.jpg";
import ClearskyImg from "./images/day/clear-sky.jpg";
import FewCloudsImg from "./images/day/few-clouds.jpg";
import ScatterCloudsImg from "./images/day/scattered-clouds.jpg";
import BrokenCloudsImg from "./images/day/broken-clouds.jpg";
import OvercastImg from "./images/day/overcast.jpg";
import SnowImg from "./images/day/snow.jpg";
import NightClearskyImg from "./images/night/night-clear-sky.jpg";
import NightCloudsImg from "./images/night/night-clouds.jpg";
import NightRainImg from "./images/night/night-rain.jpg";
import NightThunderImg from "./images/night/night-thunderstorm.jpg";
import NightSnowImg from "./images/night/night-snow.jpg";
// Weather icons
import SearchSvg from "./icons/search.svg";
import ThermSvg from "./icons/thermometer.svg";
import WindSvg from "./icons/wind.svg";
import HumidSvg from "./icons/droplet.svg";
import SunSvg from "./icons/sun.svg";
import SnowSvg from "./icons/cloud-snow.svg";
import DrizzleSvg from "./icons/cloud-drizzle.svg";
import RainSvg from "./icons/cloud-rain.svg";
import LightningSvg from "./icons/cloud-lightning.svg";
import CloudSvg from "./icons/cloud.svg";

const WeatherObj = () => {
  let celsius = false;
  return {
    celsius,
    async getWeather(city) {
        let location;
        let latit;
        let longit;
      
        if (!city) {
          // Default location
          location = await WeatherObj().getUserLocation();
          latit = location.coords.latitude;
          longit = location.coords.longitude;
        } else {
          location = await WeatherObj().fetchLocation(city);
          latit = location[0].lat;
          longit = location[0].lon;
        }
      
        return await WeatherObj().fetchWeather(latit, longit);
    },
    async getUserLocation() {
      const success = (position) => position;
      const error = (error) => error;

      let promise = new Promise((resolve, reject) => {
        window.navigator.geolocation.getCurrentPosition(
          (pos) => {
            resolve(success(pos));
          },
          (err) => {
            reject(error(err));
          }
        );
      });

      return await promise;
    },
    async fetchLocation(city) {
      const raw = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=bb9a4a8b3762bb47a3b7ff329d10b88f`,
        { mode: "cors" }
      );
      return raw.json();
    },
    async fetchWeather(lat, lon) {
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=bb9a4a8b3762bb47a3b7ff329d10b88f`,
        { mode: "cors" }
      );
      return data.json();
    },
    convertDate(data) {
      const date = new Date((data.dt + data.timezone) * 1000);
      // Remove user's local time-zone
      return date.toUTCString();
    }
  };
};

const UI = () => {
  let nightMode = false;
  let metric = false;
  return {
    nightMode,
    metric,
    showWeather(data) {

    // Default background & icon
    this.createDefaultBackground();
    this.createDefaultSvg();

      const weatherDesc = document.querySelector(".desc");
      const city = document.querySelector(".city");
      const locDate = document.querySelector(".local-date");
      const locTime = document.querySelector(".local-time");
      const mainTemp = document.querySelector(".main-temp");
      const feelsLike = document.querySelector(".feels-like");
      const wind = document.querySelector(".wind");
      const humid = document.querySelector(".humidity");

      const timestamp = WeatherObj().convertDate(data).substr(17, 5);

      weatherDesc.textContent = data.weather[0].description;
      city.textContent = data.name;
      locDate.textContent = WeatherObj().convertDate(data).substring(0, 17);
      locTime.textContent = timestamp;
      mainTemp.textContent = `°${this.convertTemp(data.main.temp)}`;
      feelsLike.textContent = `°${this.convertTemp(data.main.feels_like)}`;
      wind.textContent = this.getSpeed(data.wind.speed);
      humid.textContent = `${data.main.humidity}%`;

      // Change to night mode between 8pm and 7am
      if (parseInt(timestamp) < 7 || parseInt(timestamp) > 20) {
        this.nightMode = true;
      } else {
        this.nightMode = false;
      }

      const weatherId = data.weather[0].id;
      this.setImages(weatherId);

    },
    setMetric() {
        this.metric ? (this.metric = false) : (this.metric = true);
    },
    convertTemp(kelvin) {
      // Kelvin -> Celcius/Fahrenheit rounded to nearest integer
      if (this.metric) {
        return Math.round(kelvin - 273.15);
      } else {
        return Math.round((9 / 5) * (kelvin - 273.15) + 32);
      }
    },
    getSpeed(speed) {
        if (!this.metric) {
            return `${Math.round(((speed * 2.236936) * 10) / 10)} m/h`;
        } else {
            return `${Math.round((speed * 10) / 10)} m/s`;
        }
    },
    setFixedIcons() {
      const searchBox = document.querySelector('.search-div');
      const box1 = document.querySelector(".extra .box:nth-child(1)");
      const box2 = document.querySelector(".extra .box:nth-child(2)");
      const box3 = document.querySelector(".extra .box:nth-child(3)");

      const search = document.createElement('img')
      const feelsLike = document.createElement("img");
      const wind = document.createElement("img");
      const humid = document.createElement("img");

      search.src = SearchSvg
      feelsLike.src = ThermSvg;
      wind.src = WindSvg;
      humid.src = HumidSvg;

      searchBox.append(search)
      box1.append(feelsLike);
      box2.append(wind);
      box3.append(humid);
    },
    createDefaultBackground() {
    if (document.querySelector('.background')) return;

      const container = document.querySelector(".container");

      const img = document.createElement("img");
      img.classList.add("background");
      img.src = NightClearskyImg;
      container.append(img);
    },
    createDefaultSvg() {
    if (document.querySelector('.main-svg')) return;
      const div = document.querySelector(".svg-div");

      const svg = document.createElement("img");
      svg.classList.add("main-svg");
      svg.src = CloudSvg;
      div.append(svg);
    },
    setBgImage(link) {
      const img = document.querySelector(".background");

      link ? img.setAttribute("src", link) : this.createDefaultBackground();
    },
    setIcon(link) {
      const svg = document.querySelector(".main-svg");

      link ? svg.setAttribute("src", link) : this.createDefaultSvg();
    },
    setImages(id) {
      if (this.nightMode) {
        if (id >= 200 && id <= 232)
          this.setBgImage(NightThunderImg), this.setIcon(LightningSvg);
        if (id >= 300 && id <= 531)
          this.setBgImage(NightRainImg), this.setIcon(RainSvg);
        if (id >= 600 && id <= 622)
          this.setBgImage(NightSnowImg), this.setIcon(SnowSvg);
        if (id === 800) this.setBgImage(NightClearskyImg), this.setIcon(SunSvg);
        if (id >= 801 && id <= 804) this.setBgImage(NightCloudsImg);
      } else {
        if (id >= 200 && id <= 232)
          this.setBgImage(ThunderImg), this.setIcon(LightningSvg);
        if (id >= 300 && id <= 321)
          this.setBgImage(DrizzleImg), this.setIcon(DrizzleSvg);
        if (id >= 500 && id <= 531)
          this.setBgImage(RainImg), this.setIcon(RainSvg);
        if (id >= 600 && id <= 622)
          this.setBgImage(SnowImg), this.setIcon(SnowSvg);
        if (id === 800) this.setBgImage(ClearskyImg), this.setIcon(SunSvg);
        if (id === 801) this.setBgImage(FewCloudsImg);
        if (id === 802) this.setBgImage(ScatterCloudsImg);
        if (id === 803) this.setBgImage(BrokenCloudsImg);
        if (id === 804) this.setBgImage(OvercastImg);
      }
    }
  };
};

async function searchListener(obj) {
    const search = document.querySelector('.search-div img')
    const input = document.querySelector('#search')

    const searchLoc = async() => { 
        const data = await WeatherObj().getWeather(input.value)
        obj.showWeather(data);
        input.value = '';
    }
    search.addEventListener('click', searchLoc);
}

function metricListener(obj, data) {
    const btn = document.querySelector('.toggle-metric');

    function setMetric() {
        obj.setMetric();
        obj.showWeather(data);
    }

    btn.addEventListener('click', setMetric);
}

async function runApp() {
    const widget = WeatherObj();
    const weatherData = await widget.getWeather();

    const newUI = UI();
    newUI.setFixedIcons();
    newUI.showWeather(weatherData);

    metricListener(newUI, weatherData);
    searchListener(newUI);
}

runApp();