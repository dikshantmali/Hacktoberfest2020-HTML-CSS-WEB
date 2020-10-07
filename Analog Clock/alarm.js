setInterval(updateClock, 1000);

function updateClock(){
 let date= new Date();
 let sec = date.getSeconds() / 60;
 let min = date.getMinutes() / 60;
 let hour = date.getHours() / 12;

 document.getElementById('sec').style.transform = "rotate(" + (sec * 360) + "deg)";
 document.getElementById('min').style.transform = "rotate(" + (min * 360) + "deg)";
 document.getElementById('hour').style.transform = "rotate(" + (hour * 360) + "deg)";
}
