
var buttons = document.querySelectorAll(".drum"); //select all the buttons with class drum

//Detecting button press

for(i=0;i<buttons.length;i++){
    buttons[i].addEventListener("click",handleClick); //when we click the buttons one by one the function handleClick() will take place
}

function handleClick(){

    var buttonInnerHTML = this.innerHTML; //get all the texts in the innerhtmls of the buttons
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
}

//detecting keyboard press

document.addEventListener("keypress",keyBoardClick);


function keyBoardClick(event){
    makeSound(event.key);
    buttonAnimation(event.key);
}

function makeSound(key){
    switch (key) {
        case "w":
            var audio = new Audio ("sounds/tom-1.mp3");    //assigning sounds to each button accoding to their text in the innerhtml
            audio.play();
            break;
        case "a":
            var audio = new Audio ("sounds/tom-2.mp3");   //assigning sounds to each button accoding to their text in the innerhtml
            audio.play();
            break;
        case "s":
            var audio = new Audio ("sounds/tom-3.mp3");   //assigning sounds to each button accoding to their text in the innerhtml
            audio.play();
            break;
        case "d":
            var audio = new Audio ("sounds/tom-4.mp3");  //assigning sounds to each button accoding to their text in the innerhtml 
            audio.play();
            break;
        case "j":
            var audio = new Audio ("sounds/snare.mp3");  //assigning sounds to each button accoding to their text in the innerhtml
            audio.play();
            break;
        case "k":
            var audio = new Audio ("sounds/kick-bass.mp3"); //assigning sounds to each button accoding to their text in the innerhtml 
            audio.play();
            break;
        case "l":
            var audio = new Audio ("sounds/crash.mp3"); //assigning sounds to each button accoding to their text in the innerhtml
            audio.play();
            break;
        default:
            break;
    }
}

//generate the button animation

function buttonAnimation(currentButton){
    var activeButton = document.querySelector("." + currentButton)
    activeButton.classList.add("pressed");
    
    setTimeout(timeOut,100);
        
    function timeOut(){
        activeButton.classList.remove("pressed");
    };
}
