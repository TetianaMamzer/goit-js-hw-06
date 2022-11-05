
const inputBorder = document.querySelector('input#validation-input');
const inputLength = inputBorder.getAttribute('data-length');
inputBorder.addEventListener('blur', onInputEl);
console.log(inputLength);

function onInputEl(event) {

  if (Number(inputLength) === event.currentTarget.value.length) {
    event.currentTarget.classList.remove("invalid");
    event.currentTarget.classList.add("valid");
  } else {
    event.currentTarget.classList.remove("valid");
    event.currentTarget.classList.add("invalid");

  }
  };






