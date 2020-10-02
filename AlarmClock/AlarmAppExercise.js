console.log("this is alarm clock exercise");

const time = document.getElementById("time")

const dateDiv = document.getElementById('date')

const hour = document.getElementById('hour')

const min = document.getElementById('min')

const setBtn = document.getElementById('setBtn')

const hopt = document.getElementsByClassName('hopt')

const mopt = document.getElementsByClassName('mopt')

const alSet = document.getElementById('alSet')

const setAlarm = document.getElementById('setAlarm')


showTime();
setOptions(hour, min);
setBtn.addEventListener('click', alarm);

function setOptions(hour, min) {
    for (let index = 0; index < 24; index++) {
        hour.innerHTML += `<option class="hopt"value="${index}">${index}</option>`

    }
    for (let index = 0; index < 60; index++) {
        min.innerHTML += `<option class="mopt"value="${index}">${index}</option>`

    }

}

function showTime() {
    let date = new Date();
    let curD = date.getDate();
    let curM = date.getMonth();
    let curY = date.getFullYear();

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


    let curDate = days[date.getDay()] + ", " + curD + " " + months[curM] + " " + curY + "(IST)";

    dateDiv.textContent = curDate;


    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    // console.log(date.getUTCMonth());
    let session = "AM"
    if (h == 0) h = 12;
    if (h > 12) { h -= 12; session = "PM" };

    h = (h < 10) ? h = "0" + h : h;
    m = (m < 10) ? m = "0" + m : m;
    s = (s < 10) ? s = "0" + s : s;


    let t = h + ":" + m + ":" + s + " " + session;
    time.textContent = t;
    // check();

    setTimeout(showTime, 1000);
    // console.log(t);

}
let t;
function check() {
    console.log('check called')
    let date = new Date();
    let stopBtnExist = false;
    t = setTimeout(check, 1000);
    if (hour.value == date.getHours() && min.value == date.getMinutes() && date.getSeconds() == 0) {
        setAlarm.innerHTML = `<p>Alarm is running!</p>
        <button id="stopBtn" class="btn btn-primary my-3 ml-4">Stop</button>`;

        stopBtnExist = true;

        let audio = new Audio('https://www.tones7.com/media/extreme_clock_alarm.mp3');
        audio.play();





        if (stopBtnExist) {
            const stopBtn = document.getElementById('stopBtn');
            stopBtn.addEventListener('click', () => {
                // clearTime(t);


                audio.pause();


                restoreForm();
                //     setAlarm.innerHTML = `<h5 class="text-muted">Set Alarm</h5>

                // <form class="form-inline">
                // <div class="container d-flex align-items-center justify-content-center">
                // <label class="my-1 mr-2" for="hour">Hour</label>
                // <select class="custom-select my-1 mr-sm-2" id="hour">
                // <option selected>Select</option>

                // </select>
                // <label class="my-1 mr-2 ml-2" for="min">Minute</label>
                // <select class="custom-select my-1 mr-sm-2" id="min">
                // <option selected>Select</option>

                // </select>


                // <button id="setBtn" class="btn btn-primary my-3 ml-4">Set</button>
                // </div>

                // </form>`;
                //     // setBtn.addEventListener('click', alarm);
                //     clearTimeout(t);
                //     const hour = document.getElementById('hour')

                //     const min = document.getElementById('min')
                //     setOptions(hour, min);



                //     stopBtnExist = false;
                // return;
            })
        }
    }

}



function alarm() {
    // e.preventDefault();
    console.log('inside alarm');
    if (hour.value == "Select" || min.value == 'Select') alert('what');

    else {
        let h;
        let m;


        h = (h < 10) ? h = "0" + hour.value : h;
        m = (m < 10) ? m = "0" + min.value : m;


        setAlarm.innerHTML = `<p>Alarm is set for ${hour.value}:${min.value}</p>
        <button id="resetBtn" type="submit" class="btn btn-primary my-3 ml-4">Reset</button>`;


        const reset = document.getElementById('resetBtn');
        reset.addEventListener('click', restoreForm);
        // reset.addEventListener('click', () => {
        //     setAlarm.innerHTML = `<h5 class="text-muted">Set Alarm</h5>

        //         <form class="form-inline">
        //         <div class="container d-flex align-items-center justify-content-center">
        //         <label class="my-1 mr-2" for="hour">Hour</label>
        //         <select class="custom-select my-1 mr-sm-2" id="hour">
        //         <option selected>Select</option>

        //         </select>
        //         <label class="my-1 mr-2 ml-2" for="min">Minute</label>
        //         <select class="custom-select my-1 mr-sm-2" id="min">
        //         <option selected>Select</option>

        //         </select>


        //         <button id="setBtn" type="submit" class="btn btn-primary my-3 ml-4">Set</button>
        //         </div>

        //         </form>`;
        //     // setBtn.addEventListener('click', alarm);
        //     clearTimeout(t);
        //     const hour = document.getElementById('hour')

        //     const min = document.getElementById('min')
        //     setOptions(hour, min);


        // })
        check();
        // console.log("yo")
    }






}


function restoreForm() {
    // setAlarm.innerHTML = `<h5 class="text-muted">Set Alarm</h5>

    //             <form class="form-inline">
    //             <div class="container d-flex align-items-center justify-content-center">
    //             <label class="my-1 mr-2" for="hour">Hour</label>
    //             <select class="custom-select my-1 mr-sm-2" id="hour">
    //             <option selected>Select</option>

    //             </select>
    //             <label class="my-1 mr-2 ml-2" for="min">Minute</label>
    //             <select class="custom-select my-1 mr-sm-2" id="min">
    //             <option selected>Select</option>

    //             </select>


    //             <button id="setBtn" class="btn btn-primary my-3 ml-4">Set</button>
    //             </div>

    //             </form>`;
    // // setBtn.addEventListener('click', alarm);
    // clearTimeout(t);
    // const hour = document.getElementById('hour')

    // const min = document.getElementById('min')
    // setOptions(hour, min);


    window.location.reload();
}



