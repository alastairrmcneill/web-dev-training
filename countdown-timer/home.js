const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

function countdown() {
  let now = new Date();
  let nextYear = new Date(now.getFullYear() + 1, 0, 1);

  const differenceInMilliseconds = nextYear - now;
  const differenceInSeconds = Math.floor(differenceInMilliseconds / 1000);
  const differenceInMinutes = Math.floor(differenceInSeconds / 60);
  const differenceInHours = Math.floor(differenceInMinutes / 60);
  const differenceInDays = Math.floor(differenceInHours / 24);

  daysEl.innerHTML = differenceInDays;
  hoursEl.innerHTML = differenceInHours % 24;
  minutesEl.innerHTML = differenceInMinutes % 60;
  secondsEl.innerHTML = differenceInSeconds % 60;
}

countdown();

setInterval(countdown, 1000);
