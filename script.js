document.addEventListener("DOMContentLoaded", () => {
  let input = document.querySelector("input");
  let search = document.querySelector(".search-icon");
  let weather = document.querySelector(".weather");
  let actualtemp = document.querySelector(".actual");
  let feelsLike = document.querySelector(".feels");
  let city = document.querySelector(".city");
  let country = document.querySelector(".country");
  let humidity = document.querySelector("#humidity");
  let windSpeed = document.querySelector("#windSpeed");
  let min = document.querySelector("#min");
  let max = document.querySelector("#max");
  let weatherIcon = document.querySelector(".icon");
  let extras = document.querySelector(".extras");
  let container = document.querySelector(".container");
  let afterData = document.querySelector(".after-data")
  let beforeData = document.querySelector(".before-data")

  search.addEventListener("click", getData);
  input.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
      getData();
    }
  });

  async function getData() {
    let inCity = input.value.trim();
    try {
      if (inCity === "") {
        alert("Please enter a city name.");
        return;
      }

      let api = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${inCity}&appid=2bed98c8e24723c994699cf884d7e4cb&units=metric`
      );
      let data = await api.json();
      console.log(data);
      setData(data);
    } catch (error) {
      console.error("Error occured");
      alert("Sorry! Please try again");
    }
  }

  function setData(data) {
    afterData.classList.remove("none")
    beforeData.classList.add("none")
    extras.classList.remove("none");
    let currWeather = data.weather[0].main;
    setImageIcon(currWeather);
    weather.innerText = `${data.weather[0].main}`;
    // weatherIcon.innerHTML = `<i class="fas fa-cloud"></i>`;
    actualtemp.innerText = `${data.main.temp}\u00B0`;
    feelsLike.innerText = `Feels Like :${data.main.feels_like}\u00B0`;
    city.innerText = `${data.name}`;
    country.innerText = `${data.sys.country}`;
    humidity.innerText = `HUMIDITY : ${data.main.humidity}`;
    windSpeed.innerText = `WIND SPEED : ${data.wind.speed}`;
    min.innerText = `MIN TEMPERATURE : ${data.main.temp_min}`;
    max.innerText = `MAX TEMPERATURE : ${data.main.temp_max}`;
  }

  function setImageIcon(currWeather) {
    const weatherBackgrounds = {
      Clear:
        "https://th.bing.com/th/id/OIP.BkCkbet2P_4lqs0Z2KvblQHaEV?w=298&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      Clouds:
        "https://th.bing.com/th/id/OIP.p2CzXlBifWN8PNRV8gk2kwHaFj?w=281&h=211&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      Rain: "https://static.vecteezy.com/system/resources/previews/042/146/565/non_2x/ai-generated-beautiful-rain-day-view-photo.jpg",
      Snow: "https://th.bing.com/th/id/OIP.xTFHe4hAD-99cH0b40lndQHaFj?rs=1&pid=ImgDetMain",
      Thunderstorm:
        "https://th.bing.com/th/id/R.3039ba502d22c539cdc06bc3c3c621b2?rik=j29i7F6mZbU7%2bw&riu=http%3a%2f%2fwww.weatherforecast.co.uk%2fblog%2fwp-content%2fuploads%2f2015%2f06%2fthunderstorms.jpg&ehk=mGm1woomVerVg0Tg%2f3SH0f2turniwHNp1LGU8ZTxRMQ%3d&risl=&pid=ImgRaw&r=0",
      Drizzle:
        "https://th.bing.com/th/id/OIP.Kri05IQUs0j_UI8UZv3nsgHaE7?w=252&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      Mist: "https://th.bing.com/th/id/OIP.RhXrjdtTCcqdx6qkODzg2wHaDt?w=325&h=175&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      Haze: "https://th.bing.com/th/id/OIP.O6219Or3UhCyf0bRVa9BLwHaE6?w=270&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      Fog: "https://th.bing.com/th/id/OIP.TGpCftvKInkZXqxJsEpYvgHaDt?w=334&h=175&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      Smoke:
        "https://th.bing.com/th/id/OIP.hJoC7BS3oWtstwT-np6l8AHaEK?w=295&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      Dust: "https://th.bing.com/th/id/OIP.bAmNMvcof-TGs0U0yCTFLQHaEK?w=300&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      Sand: "https://th.bing.com/th/id/OIP.Cux4uAT0g9yCR-SKxx7GlwHaFj?w=225&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
      Tornado:
        "https://th.bing.com/th/id/OIP.NE6koBMR2SWnKYPO4sNABQHaE7?w=255&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
    };

    const weatherAssets = {
      Clear: {
        icon: "fas fa-sun",
        bg: weatherBackgrounds.Clear,
      },
      Clouds: {
        icon: "fas fa-cloud",
        bg: weatherBackgrounds.Clouds,
      },
      Rain: {
        icon: "fas fa-cloud-showers-heavy",
        bg: weatherBackgrounds.Rain,
      },
      Snow: {
        icon: "fas fa-snowflake",
        bg: weatherBackgrounds.Snow,
      },
      Thunderstorm: {
        icon: "fas fa-bolt",
        bg: weatherBackgrounds.Thunderstorm,
      },
      Drizzle: {
        icon: "fas fa-cloud-rain",
        bg: weatherBackgrounds.Drizzle,
      },
      Mist: {
        icon: "fas fa-smog",
        bg: weatherBackgrounds.Mist,
      },
      Haze: {
        icon: "fas fa-smog",
        bg: weatherBackgrounds.Haze,
      },
      Fog: {
        icon: "fas fa-smog",
        bg: weatherBackgrounds.Fog,
      },
      Smoke: {
        icon: "fas fa-smog",
        bg: weatherBackgrounds.Smoke,
      },
      Dust: {
        icon: "fas fa-wind",
        bg: weatherBackgrounds.Dust,
      },
      Sand: {
        icon: "fas fa-wind",
        bg: weatherBackgrounds.Sand,
      },
      Tornado: {
        icon: "fas fa-tornado",
        bg: weatherBackgrounds.Tornado,
      },
    };

    if (currWeather && weatherAssets[currWeather]) {
      let selectedWeather = weatherAssets[currWeather];
      weatherIcon.innerHTML = `<i class="fas ${selectedWeather.icon}"></i>`;
      container.style.backgroundImage = `url(${selectedWeather.bg})`;
    } else {
      weatherIcon.innerHTML = `<i class="fas fa-question"></i>`;
      container.style.backgroundImage =
        'url("https://images.unsplash.com/photo-1463947628408-f8581a2f4aca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNreXxlbnwwfHwwfHx8MA%3D%3D")';
    }
  }
});
