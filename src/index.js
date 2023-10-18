let now = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let hour = now.getHours();
let minute = now.getMinutes();

let weekDays = document.querySelector(".weekDay");
weekDays.innerHTML = `${day} ${hour}:${minute}`;

let form = document.querySelector("form");
form.addEventListener("submit", sayCity);
function sayCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#enter-city");
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${searchInput.value}`;
  let apiKey = "7ed26a6948c661d05fafe7355b41b2ec";
  let city = searchInput.value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

function showTemperature(response) {
  let h2 = document.querySelector("h2");
  let temperature = Math.round(response.data.main.temp);
  h2.innerHTML = `${temperature}°c`;
}
