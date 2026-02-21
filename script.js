const apiKey = "852a6420a51b0faa2a46be1752bdaba8";

console.log("1️⃣ Script start");

setTimeout(() => console.log("⏱ setTimeout → Event loop"), 0);

Promise.resolve().then(() => console.log("✅ Promise → Microtask queue"));

console.log("2️⃣ Script end");


// CALLBACK HELL DEMO
function callbackHell() {
  setTimeout(() => {
    console.log("Step 1");
    setTimeout(() => {
      console.log("Step 2");
      setTimeout(() => {
        console.log("Step 3");
      }, 1000);
    }, 1000);
  }, 1000);
}

// PROMISE VERSION
function promiseRefactor() {
  return new Promise(res => {
    setTimeout(() => {
      console.log("Promise Step 1");
      res();
    }, 1000);
  })
  .then(() => new Promise(res => {
    setTimeout(() => {
      console.log("Promise Step 2");
      res();
    }, 1000);
  }))
  .then(() => console.log("Promise Step 3"));
}


async function getWeather(cityName) {
  const city = cityName || document.getElementById("cityInput").value;

  if (!city) return;

  document.getElementById("loader").classList.remove("hidden");

  setTimeout(() => {
    document.getElementById("loader").innerText = "Fetching from server...";
  }, 500);

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    if (!response.ok) throw new Error("City not found");

    const data = await response.json();

    showWeather(data);
    saveToLocal(city);

  } catch (error) {
    alert(error.message);
  } finally {
    document.getElementById("loader").classList.add("hidden");
  }
}


function showWeather(data) {
  const card = document.getElementById("weatherCard");

  card.innerHTML = `
    <h2>${data.name}</h2>
    <p>🌡 Temp: ${data.main.temp} °C</p>
    <p>☁ Weather: ${data.weather[0].main}</p>
    <p>💨 Wind: ${data.wind.speed} m/s</p>
  `;

  card.classList.remove("hidden");
}


// LOCAL STORAGE
function saveToLocal(city) {
  let history = JSON.parse(localStorage.getItem("cities")) || [];

  if (!history.includes(city)) {
    history.push(city);
    localStorage.setItem("cities", JSON.stringify(history));
  }

  showHistory();
}

function showHistory() {
  const history = JSON.parse(localStorage.getItem("cities")) || [];
  const list = document.getElementById("history");

  list.innerHTML = "";

  history.forEach(city => {
    const li = document.createElement("li");
    li.innerText = city;
    li.onclick = () => getWeather(city);
    list.appendChild(li);
  });
}

showHistory();


// AUTO REFRESH EVERY 30 SEC
setInterval(() => {
  const city = document.getElementById("cityInput").value;
  if (city) {
    console.log("🔄 Auto refresh");
    getWeather(city);
  }
}, 30000);
