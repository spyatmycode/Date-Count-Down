let myDate = '4 July 2022 00:00'

let displayDay = document.querySelector('.days')
let displayHours = document.querySelector('.hours')
let displayMinutes = document.querySelector('.minutes')
let displaySeconds = document.querySelector('.seconds')

function countDown(){
    const newDate = new Date(myDate)

    let currentDate = new Date();

    const timeGapSeconds = newDate - currentDate;

    const seconds = Math.floor(timeGapSeconds / 1000)

    const minutes = Math.floor(seconds / 60)

    const hours = Math.floor(minutes / 60)

    const days = Math.floor(hours /24)

    displayDay.textContent = days;
    displayHours.textContent = hours%24
    displayMinutes.textContent = minutes%60
    displaySeconds.textContent = seconds%60
}

setInterval(countDown, 1000)

function port(){
    window.location.href = "https://akejuoluwanifemi-portfolio.netlify.app"
}





