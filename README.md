# Weather App

A sleek and intuitive weather application built using **HTML**, **CSS**, and **JavaScript**, utilizing the **OpenWeatherMap API** to fetch real-time weather data for any city. The UI features a modern, responsive design and dynamically updates based on weather conditions, providing an engaging and user-friendly experience.

---

##  Features

* ⛅ Live weather data by city name
* ☀️ Dynamic weather icons and background updates based on weather condition
* 🌡¯e Actual temperature and 'feels like' temperature
* 🔬 Humidity, Wind Speed, Min/Max temperatures
* ⏳ Real-time search with both button click and `Enter` key support
* 🔐 Graceful error handling for invalid inputs

---

## 🚀 Demo

https://shashankponna.github.io/Weather-App/

## 📁 Project Structure

```
weather-app/
├── index.html          # Main HTML page
├── style.css           # Stylesheet for UI
├── script.js           # JavaScript logic for API fetch and UI rendering
```

---

## ⚙️ Technologies Used

* **HTML5** - Markup structure
* **CSS3** - Responsive and modern design with backdrop blur effects
* **JavaScript (ES6)** - DOM manipulation, async API handling
* **[OpenWeatherMap API](https://openweathermap.org/api)** - Weather data provider
* **Font Awesome** - Icons based on weather type

---

## 🔍 How to Use

1. Clone the repository:


git clone https://github.com/ShashankPonna/Weather-App.git
cd weather-app

2. Open `index.html` in your browser.

3. Enter any city name and click the search icon or press `Enter`.

> Weather details will update dynamically with background and icon changes.

---

## 📚 Learning Outcome

* Practiced working with asynchronous JavaScript and APIs.
* Learned how to handle API data and dynamically update the DOM.
* Improved understanding of `fetch`, `async/await`, and error handling.
* Learned to map API values to UI elements like icons and background images.

---

## 🌐 API Key Info

* This app uses OpenWeatherMap's current weather endpoint.
* Replace the existing API key in `script.js` with your own key if deploying publicly:

const apiKey = "YOUR_API_KEY";

---

## 🚀 Future Goals

* Add support for **forecasted weather**
* Add **location-based detection**
* Integrate AI to extract weather-based queries or auto-fill city names from voice/image input

