function clock(){
    var hours = document.getElementById('Hours')
    var Minutes = document.getElementById('Minutes')
    var Seconds = document.getElementById('Seconds')
    var nanoSeconds = document.getElementById('Microseconds')

    var hrs = new Date().getHours()
    var mins = new Date().getMinutes()
    var sec = new Date().getSeconds()
    var nsec = new Date().getMilliseconds()

    hours.innerHTML = hrs
    Minutes.innerHTML = mins
    Seconds.innerHTML = sec
    nanoSeconds.innerHTML = nsec
}
var intervals = setInterval(clock, 1000)
