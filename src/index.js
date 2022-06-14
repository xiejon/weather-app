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
import RainFavicon from "./icons/raindrop.png";

const WeatherObj = () => {
  let weatherData;
  return {
    weatherData,
    async getWeather(city) {
      let location;
      let latit;
      let longit;

      if (!city) {
        try {
          location = await WeatherObj().getUserLocation();
          latit = location.coords.latitude;
          longit = location.coords.longitude;
        } catch {
          location = await WeatherObj().fetchLocation('london');
          latit = location[0].lat;
          longit = location[0].lon;
        }
      } else {
        location = await WeatherObj().fetchLocation(city);
        latit = location[0].lat;
        longit = location[0].lon;
      }

      this.weatherData = await WeatherObj().fetchWeather(latit, longit);
      return this.weatherData;
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
        `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=bb9a4a8b3762bb47a3b7ff329d10b88f`,
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
    },
  };
};

const UI = () => {
  let nightMode = false;
  let metric = false;
  return {
    nightMode,
    metric,
    showWeather(data) {
        // Disable loading page 
        const loadingPage = document.querySelector('.loading-page');
        loadingPage.style.display = 'none';

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
        return `${Math.round((speed * 2.236936 * 10) / 10)} m/h`;
      } else {
        return `${Math.round((speed * 10) / 10)} m/s`;
      }
    },
    setFixedIcons() {
      const searchBox = document.querySelector(".search-div");
      const box1 = document.querySelector(".extra .box:nth-child(1)");
      const box2 = document.querySelector(".extra .box:nth-child(2)");
      const box3 = document.querySelector(".extra .box:nth-child(3)");

      const search = document.createElement("img");
      const feelsLike = document.createElement("img");
      const wind = document.createElement("img");
      const humid = document.createElement("img");

      search.src = SearchSvg;
      feelsLike.src = ThermSvg;
      wind.src = WindSvg;
      humid.src = HumidSvg;

      searchBox.append(search);
      box1.append(feelsLike);
      box2.append(wind);
      box3.append(humid);
    },
    createDefaultBackground() {
      if (document.querySelector(".background")) return;

      const container = document.querySelector(".container");

      const img = document.createElement("img");
      img.classList.add("background");
      img.src = NightClearskyImg;
      container.append(img);
    },
    createDefaultSvg() {
      if (document.querySelector(".main-svg")) return;
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
        // Change background & icon according to weather ID
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
    },
    setLoadingPage() {

        function setFavicon() {
            const favicon = document.createElement("link");
            favicon.setAttribute("rel", "icon");
            favicon.setAttribute("type", "image/x-icon");
            favicon.setAttribute("href", RainFavicon);
            document.head.append(favicon);
        }

        function renderGithubIcon() {
            const a = document.createElement('a');
            a.href = 'https://github.com/xiejon';

            const footer = document.querySelector('.footer')
            const iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            const iconPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        
            iconSvg.setAttribute('width', '24');
            iconSvg.setAttribute('height', '24');
            iconSvg.setAttribute('viewbox', '0 0 24 24');
            iconPath.setAttribute('d', "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z");
        
            a.append(iconSvg);
            iconSvg.appendChild(iconPath);
            footer.append(a)
        }

        setFavicon();
        renderGithubIcon();

        const loadingPage = document.createElement('div');
        const content = document.createElement('p');

        loadingPage.classList.add('loading-page')
        loadingPage.style.backgroundColor = 'rgb(125, 186, 230)';
        loadingPage.style.zIndex = '999'
        loadingPage.style.display = 'flex';

        content.textContent = 'Gathering data...'

        document.body.append(loadingPage)
        loadingPage.append(content);
    }
  };
};

// Event listener for search button
async function searchListener(obj, widget) {
  const search = document.querySelector(".search-div img");
  const input = document.querySelector("#search");

  const searchLoc = async () => {
    const data = await widget.getWeather(input.value);
    obj.showWeather(data);
    input.value = "";
  };
  search.addEventListener("click", searchLoc);
}

// Event listener to toggle imperial/metric
function metricListener(obj, widget) {
  const btn = document.querySelector(".toggle-metric");

  const setMetric = () => {
    obj.setMetric();
    obj.showWeather(widget.weatherData);
  };

  btn.addEventListener("click", setMetric);
}

async function runApp() {
  const widget = WeatherObj();
  const weatherData = await widget.getWeather();

  const newUI = UI();
  newUI.setFixedIcons();
  newUI.showWeather(weatherData);

  metricListener(newUI, widget);
  searchListener(newUI, widget);
}

UI().setLoadingPage();
runApp();
