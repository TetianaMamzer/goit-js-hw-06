function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bColor = document.querySelector('.color');
const buttonChangeColor = document.querySelector('.change-color');

function changeColorBt(event) {

    bColor.textContent = getRandomHexColor();
}
buttonChangeColor.addEventListener('click', changeColorBt)