let btn = document.getElementById("generate");
let box = document.getElementById("color-box");

btn.addEventListener("click", generateColor);

function generateColor() {
  let newColor = getRendom();
  box.style.backgroundColor = newColor;
}
function getRendom() {
  let red = Math.floor(Math.random() * 225);
  let green = Math.floor(Math.random() * 225);
  let blue = Math.floor(Math.random() * 225);

  let color = `rgb(${red},${green},${blue})`;
  return color;
}
function red() {
  box.style.backgroundColor = `rgb(225, 0, 0)`;
}
function black() {
  box.style.backgroundColor = `rgb(0, 0, 0)`;
}
function green() {
  box.style.backgroundColor = `rgb(0, 225, 0)`;
}
function blue() {
  box.style.backgroundColor = `rgb(0, 0, 225)`;
}
function yellow() {
  box.style.backgroundColor = `yellow`;
}
function pink() {
  box.style.backgroundColor = `rgb(225,0,225)`;
}
