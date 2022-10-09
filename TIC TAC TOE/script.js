let cells = document.querySelectorAll(".cell");
let winner = document.querySelector(".winner");
let reset = document.querySelector(".reset");

const winconditions = [
  [1, 2, 3], //2
  [4, 5, 6], //60
  [7, 8, 9], //336
  [1, 4, 7], //18
  [3, 6, 9], //80
  [2, 5, 8], //28
  [1, 5, 9], //32
  [3, 5, 7], //48
];
let options1 = [];
let options2 = [];
let currentPlayer = 0;
let running = false;

cells.forEach((cell) =>
  cell.addEventListener("click", function () {
    let audio = document.getElementById("myaudio").autoplay;
    let IndexOfcells = this.getAttribute("cellIndex");
    if (currentPlayer === 0) {
      cell.textContent = "X";
      options1.push(Number(IndexOfcells));

      currentPlayer = 1;
    } else if (currentPlayer === 1) {
      cell.textContent = "O";
      options2.push(Number(IndexOfcells));

      currentPlayer = 0;
    }
    let [a, b, c, d, e] = options1;
    let [f, g, h, j] = options2;
    console.log(options1);
    console.log(options2);
    for (let i = 0; i < 9; i++) {
      let [u, v, x] = [
        winconditions[i][0],
        winconditions[i][1],
        winconditions[i][2],
      ];
      console.log(u, v, x);
      if ((a || f) === u && (b || g) === v && (c || h) == x) {
        if (currentPlayer === 1) {
          winner.textContent = "X won";
        } else {
          winner.textContent = "O won";
        }
      }
    }
  })
);
reset.addEventListener("click", function () {
  for (let i = 0; i < 9; i++) {
   let a =  document.querySelector(`#cell${i}`).textContent = "";
  }
console.log(a);
  winner.textContent = "";
});
