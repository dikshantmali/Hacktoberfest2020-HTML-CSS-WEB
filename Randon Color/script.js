const $container = document.querySelector(".main-container");
const $colorName = document.querySelector(".color-name");
const $btn = document.querySelector(".btn");

$btn.addEventListener("click", function generateColor() {
  let color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  $colorName.textContent = color;
  $container.style.backgroundColor = color;
});
