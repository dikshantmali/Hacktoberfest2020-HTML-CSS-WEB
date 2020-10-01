var p1Button = document.querySelector("#p1")
var p2Button = document.querySelector("#p2")
var resetButton = document.getElementById("reset");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var number = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");
var won = document.getElementById("won");
var gameover = false;
var p1Score = 0;
var p2Score = 0;
var winningScore = 3;

p1Button.addEventListener("click" , function()
{
    if(!gameover)
    {
        p1Score++;
        if(p1Score === winningScore)
        {
            p1Display.classList.add("winner");
            gameover=true;
            won.innerHTML = "Winner is Player1"
        }
        p1Display.textContent = p1Score;
    }
})

p2Button.addEventListener("click" , function()
{
    if(!gameover)
    {
        p2Score++;
        if(p2Score === winningScore)
        {
            p2Display.classList.add("winner");
            gameover=true;
            won.innerHTML = "Winner is Player2"

        }
        p2Display.textContent = p2Score;
    }
})

resetButton.addEventListener("click",function(){
    reset();
})

function reset()
{
    p1Score = 0;
    p2Score = 0;
    gameover = false;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    won.innerHTML="";
}

number.addEventListener("change",function(){
    winningScoreDisplay.textContent = this.value;
    winningScore = Number(this.value);
    reset();
})

