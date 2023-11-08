const hamburgerBtnEl = document.getElementById("hamburgerBtn");
const primaryNavEl = document.getElementById("primaryNav");
const locationNavOption = document.getElementById("locationNavOption");
const locationNavEl = document.getElementById("locationNav");

hamburgerBtnEl.addEventListener("click", () => {
  primaryNavEl.classList.toggle("open");
});

locationNavOption.addEventListener("click", () => {
  locationNavEl.classList.toggle("open");
});
