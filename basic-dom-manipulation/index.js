let randomNumber = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
let count = 0;

function getNumber() {
  return randomNumber;
}

function guessNumber() {
  //The "getElementById" method to get the value of the html element with the id "guesser". In this case, it is the input.
//The "createElement" method creates an element, in this case a <p>.
  let guess = document.getElementById("guesser").value;
  let log = document.createElement("p");
 
//The "appendChild" adds the p element with the appropriate text based on the input.
  if (guess < randomNumber) {
    log.innerHTML = guess + " is too low.";
    document.body.appendChild(log);
    count ++;
    return;
  } else if (guess > randomNumber) {
    log.innerHTML = guess + " is too high.";
    document.body.appendChild(log);
    count ++;
    return;
  } else {
    count ++;
    log.innerHTML = guess + " is correct! You guessed the number in " + count + "  tries!";
    document.body.appendChild(log);
    
    return;
  }
}
