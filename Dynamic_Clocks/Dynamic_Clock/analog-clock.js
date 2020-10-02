const angle = 6;
const hr = document.getElementById('hr')
const min = document.getElementById('min')
const sec = document.getElementById('sec')
setInterval(function(){
    var date = new Date()
    var Hours = date.getHours()*30
    var Minutes = date.getMinutes()*angle
    var Second = date.getSeconds()*angle
    hr.style.transform = `rotateZ(${Hours+(Minutes/12)}deg)`
    min.style.transform = `rotateZ(${Minutes}deg)`
    sec.style.transform = `rotateZ(${Second}deg)`
})