var randomImages = [
  "./images/dice1.png",
  "./images/dice2.png",
  "./images/dice3.png",
  "./images/dice4.png",
  "./images/dice5.png",
  "./images/dice6.png",
];
var randomNumber = Math.floor(Math.random() * 6);
var randomNumber2 = Math.floor(Math.random() * 6);
document.querySelector(".img1").setAttribute("src", randomImages[randomNumber]);
document
  .querySelector(".img2")
  .setAttribute("src", randomImages[randomNumber2]);
if (randomNumber > randomNumber2) {
  document.querySelector("h1").textContent = "Player 1 wins";
} else if (randomNumber === randomNumber2) {
  document.querySelector("h1").textContent = "It's a draw";
} else {
  document.querySelector("h1").textContent = "Player 2 wins";
}
