
const secondHand = document.querySelector('.second-hand')
const minuteHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')


function setDate() {
    const now = new Date();
    
    const seconds = now.getSeconds();
    // get percentage then multiply by degrees
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    console.log(seconds);
    

    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

}

// add date to clock
    const date = new Date();
    const clockDate = date.getDate();
    document.getElementById("date").innerHTML = clockDate;
    console.log(date);
    console.log(clockDate);



// run every second
setInterval(setDate, 1000);