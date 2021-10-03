function display(val) {
  document.getElementById("result").value += val;
}

function solve() {
  var expr = document.getElementById("result").value;
  var soln = eval(expr.replace(/x/g, "*").replace(/÷/g, "/"));
  var res = soln - Math.floor(soln) !== 0;
  if (res == false) {
    document.getElementById("result").value = soln;
  } else {
    document.getElementById("result").value = soln.toFixed(2);
  }
}

function singleDelete() {
  var x = document.getElementById("result").value;
  document.getElementById("result").value = x.slice(0, -1);
}

function erase() {
  document.getElementById("result").value = "";
}
