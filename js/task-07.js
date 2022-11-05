const sizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');


function onInputClick(event) {
  console.log(event.currentTarget.value);
  text.style.fontSize = event.currentTarget.value + "px";
 
}

sizeControl.addEventListener('input', onInputClick);