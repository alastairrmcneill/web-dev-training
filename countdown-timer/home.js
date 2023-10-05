const daysEl = document.getElementById("days")
const hoursEl = document.getElementById("hours")
const minutesEl = document.getElementById("mins")
const secondsEl = document.getElementById("seconds")



function countdown() {
    let now = new Date()
    let nextYear = new Date(now.getFullYear() + 1, 0, 1)
    difference = nextYear - now


}

countdown()

setInterval(countdown, 1000);