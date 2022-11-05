const nameInput = document.querySelector('input#name-input');
const nameOutput = document.querySelector('span#name-output');

const onInputClick = (event) => {
    nameOutput.textContent  = event.currentTarget.value ? event.currentTarget.value : "Anonymous";
  
}
nameInput.addEventListener('input', onInputClick);