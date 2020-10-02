var buttonColours = ["green", "blue", "red", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;

$(".btn").on("click", handleClick);

$(document).on("keydown",function(event) {
  if (level === 0 && event.key.toUpperCase() === "A" ){
    nextSequence();
  }

  if ( $("#level-title").text() === "Game Over, Press Any Key to Restart" ) {
    startOver();
    nextSequence();
  }

});

function nextSequence() {
  var randomNumber = Math.floor( Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  $("#level-title").text("Level " + level);
  gamePattern.push(randomChosenColour);
  animatePress(randomChosenColour);
  playSound(randomChosenColour);
  ++level;
}

function handleClick() {
  var userChosenColour = $(this).attr("id");
  if (level > 0 ){
    userClickedPattern.push(userChosenColour);
    animatePress(userChosenColour);
    playSound(userChosenColour);
    checkAnswer(userClickedPattern.length - 1);
  }
}

function animatePress(currentColour) {
  var btn = $("#" + currentColour);
  btn.addClass("pressed").delay(200).queue( function (){
    btn.removeClass("pressed").dequeue();
  });
}

function checkAnswer(currentLevel){

  if(gamePattern[currentLevel] != userClickedPattern[currentLevel]) {
      gameOver();
  } else if (gamePattern.length === userClickedPattern.length) {
    userClickedPattern = [];
    setTimeout(function(){nextSequence();},1000);
  }

}

function startOver() {
  gamePattern = [];
  userClickedPattern = [];
  level = 0;
}

function gameOver()  {
  var gameOver = new Audio("sounds/wrong.mp3");
  var body = $("body");

  body.addClass("game-over").delay(200).queue( function (){
    gameOver.play();
    body.removeClass("game-over").dequeue();
  });

  $("#level-title").text("Game Over, Press Any Key to Restart");

}

function playSound(color){
  switch (color) {
    case "green":
      var green = new Audio("sounds/green.mp3");
      green.play();
      break;
    case "blue":
      var blue = new Audio("sounds/blue.mp3");
      blue.play();
      break;
    case "red":
      var red = new Audio("sounds/red.mp3");
      red.play();
      break;
    case "yellow":
      var yellow = new Audio("sounds/yellow.mp3");
      yellow.play();
      break;
    default:
      console.log(color);
  }
}
