// Gradient

let body = document.querySelector('body');
let generateBtn = document.querySelector('.generate');
let gradientValues = document.querySelector('.gradient-values');

generateBtn.addEventListener('click', refresh)

function refresh() {
    let r1 = Math.round(Math.random() * 255);
    let g1 = Math.round(Math.random() * 255);
    let b1 = Math.round(Math.random() * 255);
    let r2 = Math.round(Math.random() * 255);
    let g2 = Math.round(Math.random() * 255);
    let b2 = Math.round(Math.random() * 255);
    let dir = ['to left', 'to right', 'to top', 'to bottom'];
    let index = Math.floor(Math.round(Math.random() * 3));
    body.style.backgroundImage = `linear-gradient(${dir[index]},rgb(${r1},${g1},${b1}),rgb(${r2},${g2},${b2}))`;
    gradientValues.innerHTML = `<code>linear-gradient(${dir[index]},rgb(${r1},${g1},${b1}),rgb(${r2},${g2},${b2}))</code>`;
}

refresh();

