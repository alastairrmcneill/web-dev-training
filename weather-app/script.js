const apiKey = "bfeeea2c603b30d8e83e9904d7ddcadd";
const container = document.querySelector(".container");
const searchButton = document.querySelector(".search-box button");
const searchBoxInput = document.querySelector(".search-box input");
const weatherBox = document.querySelector(".weather-box");
const weatherDetails = document.querySelector(".weather-details");
const error404 = document.querySelector(".not-found");

searchButton.addEventListener("click", () => {
  const city = searchBoxInput.value;
  if (city === "") return;

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
  )
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
    });
});
