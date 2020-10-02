var numberOfSquares=6;
var colours = [];
var pickedColour;
var squares = document.querySelectorAll(".square");
var colourDisplay = document.getElementById("colourDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){

    setUpModeButton();
    setUpSquares();
    reset();

}
function setUpModeButton(){
    for(var i=0;i<modeButtons.length;i++)
    {
        modeButtons[i].addEventListener("click",function(){
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");
        this.textContent === "Easy"? numberOfSquares=3:numberOfSquares=6;
        reset();
    })
    }
}

function setUpSquares(){
    for(var i=0;i<squares.length;i++)
    {

        //add click listeners to squares
        squares[i].addEventListener("click",function(){
        //grab colour of clicked square
        var clickedColour = this.style.backgroundColor;
        if(clickedColour === pickedColour)
        {//correct
            messageDisplay.textContent = "CORRECT!";
            resetButton.textContent = "Play Again";
            changeColours(clickedColour);
            h1.style.backgroundColor = clickedColour;

        }
        else{//wrong
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "TRY AGAIN";
        }
    })
    }
}



function reset(){
    colours = generateRandomColours(numberOfSquares);
    //pick a new colour from array
    pickedColour = pickColour();
    colourDisplay.textContent = pickedColour;
    resetButton.textContent="New Colours";
    messageDisplay.textContent="";
    for( var i=0;i<squares.length;i++)
    {
        if(colours[i])
        {
            squares[i].style.display="block";
            squares[i].style.backgroundColor = colours[i];
        }
        else{
            squares[i].style.display="none";
        }
    }
    h1.style.backgroundColor = "steelblue";
}

 
resetButton.addEventListener("click",function(){
    reset();
})

colourDisplay.textContent = pickedColour;



function changeColours(colour){
    //change all squares to change the correct colour
    for(var i=0;i<squares.length;i++)
    {
        squares[i].style.backgroundColor = colour;
    }
}

function pickColour(){
    var random = Math.floor(Math.random()*colours.length);
    return colours[random];
}

function generateRandomColours(num){
    var arr = [];
    for(var i=0;i<num;i++)
    {
        arr.push(randomColour());   
    }
    return arr;
}

function randomColour(){
    var red = Math.floor(Math.random()*256);
    var green = Math.floor(Math.random()*256);
    var blue = Math.floor(Math.random()*256);

    //"rgb(red, green, blue)"
    return "rgb(" + red + ", " + green + ", " + blue + ")";

}