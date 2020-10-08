// Play sound and show alert message
function play() {
  let alertSound;
  alertSound = new Audio("./windchimes.wav");
  alertSound.play();
}

let playButton = document.querySelector("#play-sound-button")
playButton.addEventListener("click", function (e) {
  play()
  e.preventDefault();
});