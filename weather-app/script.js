const apikey = "44bef00d225d0215970cff4ba55faa74";
const apiCall =
  " https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const tempEl = document.querySelector(".temp");
const cityEl = document.querySelector(".city");
const searchInp = document.querySelector(".search-city");
const searchBtn = document.querySelector(".search-btn");

async function checkWeather(city) {
  const response = await fetch(apiCall + city + `&appid=${apikey}`);
  const data = await response.json();

  cityEl.innerHTML = data.name;
  tempEl.innerHTML = Math.round(data.main.temp) + "°C";

  console.log(data);
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchInp.value);
});
