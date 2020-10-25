const start=document.getElementById("start")
const stop=document.getElementById("stop")
const reset=document.getElementById("reset")
const minutes=document.querySelector(".minutes")
const hours=document.querySelector(".hours")
const seconds=document.querySelector(".seconds")
let stoptimer,hour=0,minute=0,second=0
start.addEventListener("click",()=>{
    stoptimer=setInterval(starttimer,1000);
})
stop.addEventListener("click",()=>{
    clearInterval(stoptimer);
})
reset.addEventListener("click",()=>{
    hour=0
    minute=0
    second=0
    minutes.textContent=00
    hours.textContent=00
    seconds.textContent=00
})
function starttimer(){
    second++
    if(second==60)
    {
        minute++
        if(minute==60)
        {
            hour++
            minute=0
        }
        second=0
    }
    minutes.textContent=minute>9?minute:"0"+minute
    hours.textContent=hour>9?hour:"0"+hour
    seconds.textContent=second>9?second:"0"+second
}