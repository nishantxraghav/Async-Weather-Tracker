# 🌦 Async Weather Tracker

A JavaScript-based weather information system built using **Vanilla JavaScript** that demonstrates **asynchronous programming, event loop behavior, Promises, async/await, and Local Storage**.

This project fetches real-time weather data from a public API and showcases JavaScript runtime concepts in a practical and interactive way.

---

## 🚀 Features

* 🔍 Search weather by city name
* ⏳ Loading indicator using `setTimeout()`
* 🔄 Auto-refresh weather using `setInterval()`
* 🌐 Fetch API integration
* 🤝 Promise handling using `.then()` and `.catch()`
* 🧠 Async/Await implementation with `try...catch`
* 😵 Callback Hell demonstration
* ✨ Refactored using Promises
* 📦 Local Storage for recent searches
* ⚠ Graceful error handling for invalid cities
* 🧾 Console-based execution order analysis
* 🔄 Event loop & call stack visualization

---

## 🛠 Technologies Used

* HTML5
* CSS3
* Vanilla JavaScript (ES6)
* OpenWeatherMap API
* Browser Local Storage

---

## 📂 Project Structure

```
async-weather-tracker
│── index.html
│── style.css
│── script.js
│── README.md
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone or Download the Project

```
git clone https://github.com/your-username/async-weather-tracker.git
```

or download the ZIP.

---

### 2️⃣ Get Your API Key

1. Go to: https://openweathermap.org/api
2. Create a free account
3. Verify your email
4. Generate an API key

---

### 3️⃣ Add API Key in script.js

```js
const apiKey = "YOUR_API_KEY";
```

---

### 4️⃣ Run the Project

Simply open:

```
index.html
```

in your browser.

---

## 🧪 Concepts Demonstrated

### 🔹 Asynchronous JavaScript

* `setTimeout()`
* `setInterval()`
* Fetch API

### 🔹 Promises

* `.then()`
* `.catch()`

### 🔹 Async/Await

Cleaner asynchronous code using:

```js
try {
  const response = await fetch(url);
} catch (error) {
  console.log(error);
}
```

### 🔹 Callback Hell

Nested asynchronous calls and its refactored Promise-based solution.

### 🔹 Event Loop Execution Order

Console output demonstrates:

```
Script start
Script end
Promise (Microtask)
setTimeout (Macrotask)
```

### 🔹 Local Storage

Stores previously searched cities and persists after page reload.

---

## ❗ Error Handling

* Invalid city name → alert message
* Empty input → ignored
* API failure → handled using `try...catch`

---

## 🔄 Auto Refresh

Weather data refreshes automatically every **30 seconds** for the last searched city.

---

## 📸 Suggested Output Screenshots (For Lab File)

* Main UI
* Weather result
* Loading state
* Invalid city error
* Local storage history
* Console showing event loop order

---

## 🎯 Viva Explanation (Short)

This project demonstrates how JavaScript handles asynchronous operations using Promises and async/await.
The event loop manages execution order by prioritizing microtasks (Promises) over macrotasks (setTimeout).
Local Storage is used to persist user search history.

---

## 📈 Future Enhancements

* 📍 Current location weather
* 🌙 Dark mode
* 🌡 5-day forecast
* 🎨 Weather icons
* 📱 Fully responsive UI

---

## 👨‍💻 Author

**Nishant Raghav**

---

## ⭐ Conclusion

The Async Weather Tracker is a practical implementation of JavaScript runtime behavior and asynchronous programming, combining real-world API integration with core theoretical concepts.
