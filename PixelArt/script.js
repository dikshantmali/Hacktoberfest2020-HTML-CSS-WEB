function all() {
  var head = document.getElementById("had");
  head.addEventListener("mouseover", function () {
    changeheadcolor();
  });
  head.addEventListener("mouseout", function () {
    changeheadcolor();
  });
  head.style.cursor = "pointer";
  function getRandom() {
    var letters = "0123456789ABCDEF";
    var col = "#";
    for (var i = 0; i < 6; i++) {
      col += letters[Math.floor(Math.random() * 16)];
    }
    return col;
  }
  function changeheadcolor() {
    var cl = getRandom();
    head.style.color = cl;
  }
}
all();
const c = document.getElementById("pixel_canvas");
let temph = $("#input_height");
let tempw = $("#input_width");

//An event listener that comes into action when Submit button is clicked .
$("#input_submit").click(function (e) {
  e.preventDefault();
  makeGrid();
});

let color = $("#colorPicker");
function makeGrid() {
  c.innerHTML = "";
  let height = temph.val();
  let width = tempw.val();
  let addEvent = function (cell) {
    cell.addEventListener("click", function () {
      cell.style.backgroundColor = color.val();
    });
    cell.addEventListener("dblclick", function () {
      cell.style.backgroundColor = "white";
    });
  };
  for (let i = 0; i < height; i++) {
    let row = c.insertRow(i);
    for (let j = 0; j < width; j++) {
      let cell = row.insertCell(j);
      cell.addEventListener("click", addEvent(cell));
    }
  }
}
